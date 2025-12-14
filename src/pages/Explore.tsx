import { SearchBar } from "@/components/SearchBar";
import { ExploreGrid } from "@/components/ExploreGrid";
import { SuggestedUsers } from "@/components/SuggestedUsers";
import { BottomNav } from "@/components/BottomNav";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl">
        <div className="px-4 py-3">
          <SearchBar
            onSearch={(query) => {
              setSearchQuery(query);
              setIsSearching(query.length > 0);
            }}
            placeholder="Search users, tags, places..."
          />
        </div>
      </div>

      {isSearching ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="px-4 py-8"
        >
          <p className="text-center text-muted-foreground">
            Searching for "{searchQuery}"...
          </p>
          <SuggestedUsers />
        </motion.div>
      ) : (
        <>
          <ExploreGrid />
        </>
      )}

      <BottomNav />
    </div>
  );
}
