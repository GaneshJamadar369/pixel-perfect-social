import { Search, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({
  onSearch,
  placeholder = "Search",
  className,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    setQuery("");
    onSearch?.("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("relative", className)}
    >
      <div
        className={cn(
          "flex items-center gap-3 rounded-xl bg-secondary px-4 py-3 transition-all duration-200",
          isFocused && "ring-2 ring-ring/20"
        )}
      >
        <Search className="h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onSearch?.(e.target.value);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
        <AnimatePresence>
          {query && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={handleClear}
              className="rounded-full bg-muted-foreground/20 p-1"
            >
              <X className="h-3 w-3 text-muted-foreground" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
