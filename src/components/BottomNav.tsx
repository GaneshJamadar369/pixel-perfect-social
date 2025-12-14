import { Home, Search, PlusSquare, Heart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
  { icon: Home, path: "/", label: "Home" },
  { icon: Search, path: "/explore", label: "Explore" },
  { icon: PlusSquare, path: "/create", label: "Create" },
  { icon: Heart, path: "/activity", label: "Activity" },
  { icon: User, path: "/profile", label: "Profile" },
];

export function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-lg items-center justify-around py-2">
        {navItems.map(({ icon: Icon, path, label }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={cn(
                "relative flex flex-col items-center p-2 transition-colors",
                isActive ? "text-foreground" : "text-muted-foreground"
              )}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon
                  className={cn(
                    "h-6 w-6 transition-all",
                    isActive && "stroke-[2.5px]"
                  )}
                  fill={isActive && path !== "/create" ? "currentColor" : "none"}
                />
              </motion.div>
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 h-1 w-1 rounded-full bg-foreground"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
