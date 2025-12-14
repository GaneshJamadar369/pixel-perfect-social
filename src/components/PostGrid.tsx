import { motion } from "framer-motion";
import { Heart, MessageCircle, Layers } from "lucide-react";
import { useState } from "react";

import post1 from "@/assets/post-1.jpg";
import post2 from "@/assets/post-2.jpg";
import post3 from "@/assets/post-3.jpg";
import post4 from "@/assets/post-4.jpg";
import post5 from "@/assets/post-5.jpg";
import post6 from "@/assets/post-6.jpg";

interface Post {
  id: string;
  image: string;
  likes: number;
  comments: number;
  isCarousel?: boolean;
}

const samplePosts: Post[] = [
  { id: "1", image: post1, likes: 1234, comments: 45 },
  { id: "2", image: post2, likes: 892, comments: 23, isCarousel: true },
  { id: "3", image: post3, likes: 2156, comments: 89 },
  { id: "4", image: post4, likes: 3421, comments: 156 },
  { id: "5", image: post5, likes: 567, comments: 12 },
  { id: "6", image: post6, likes: 1890, comments: 67, isCarousel: true },
];

export function PostGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const formatNumber = (num: number) => {
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  return (
    <div className="grid grid-cols-3 gap-0.5">
      {samplePosts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          className="relative aspect-square cursor-pointer overflow-hidden"
          onMouseEnter={() => setHoveredId(post.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <img
            src={post.image}
            alt={`Post ${post.id}`}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />

          {/* Carousel indicator */}
          {post.isCarousel && (
            <div className="absolute right-2 top-2">
              <Layers className="h-4 w-4 text-white drop-shadow-lg" />
            </div>
          )}

          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredId === post.id ? 1 : 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black/40"
          >
            <div className="flex items-center gap-6 text-white">
              <div className="flex items-center gap-1">
                <Heart className="h-5 w-5" fill="white" />
                <span className="font-semibold">{formatNumber(post.likes)}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="h-5 w-5" fill="white" />
                <span className="font-semibold">{formatNumber(post.comments)}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
