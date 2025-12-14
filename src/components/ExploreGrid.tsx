import { motion } from "framer-motion";
import { Play, Layers } from "lucide-react";

import post1 from "@/assets/post-1.jpg";
import post2 from "@/assets/post-2.jpg";
import post3 from "@/assets/post-3.jpg";
import post4 from "@/assets/post-4.jpg";
import post5 from "@/assets/post-5.jpg";
import post6 from "@/assets/post-6.jpg";

interface ExploreItem {
  id: string;
  image: string;
  type: "image" | "video" | "carousel";
  isLarge?: boolean;
}

const exploreItems: ExploreItem[] = [
  { id: "1", image: post1, type: "image" },
  { id: "2", image: post2, type: "carousel" },
  { id: "3", image: post3, type: "image", isLarge: true },
  { id: "4", image: post4, type: "video" },
  { id: "5", image: post5, type: "image" },
  { id: "6", image: post6, type: "carousel" },
  { id: "7", image: post2, type: "image" },
  { id: "8", image: post4, type: "video", isLarge: true },
  { id: "9", image: post1, type: "image" },
];

export function ExploreGrid() {
  return (
    <div className="grid grid-cols-3 gap-0.5">
      {exploreItems.map((item, index) => {
        const isLarge = index === 2 || index === 7;

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.03 }}
            className={`relative cursor-pointer overflow-hidden ${
              isLarge ? "col-span-2 row-span-2" : ""
            }`}
          >
            <div className="aspect-square h-full w-full">
              <img
                src={item.image}
                alt={`Explore ${item.id}`}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Type indicators */}
            {item.type === "video" && (
              <div className="absolute right-2 top-2">
                <Play className="h-4 w-4 text-white drop-shadow-lg" fill="white" />
              </div>
            )}
            {item.type === "carousel" && (
              <div className="absolute right-2 top-2">
                <Layers className="h-4 w-4 text-white drop-shadow-lg" />
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
