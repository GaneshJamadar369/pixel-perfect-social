import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Camera, Image, Video, Layout, X } from "lucide-react";
import { motion } from "framer-motion";

import post1 from "@/assets/post-1.jpg";
import post2 from "@/assets/post-2.jpg";
import post3 from "@/assets/post-3.jpg";
import post4 from "@/assets/post-4.jpg";
import post5 from "@/assets/post-5.jpg";
import post6 from "@/assets/post-6.jpg";

const galleryImages = [post1, post2, post3, post4, post5, post6];

const createOptions = [
  { icon: Image, label: "Post", description: "Share a photo or video" },
  { icon: Video, label: "Reel", description: "Create a short video" },
  { icon: Layout, label: "Story", description: "Share a moment" },
];

export default function Create() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="flex items-center justify-between px-4 py-4">
          <button className="p-1 text-foreground">
            <X className="h-6 w-6" />
          </button>
          <h1 className="font-display text-lg font-semibold">Create</h1>
          <Button size="sm" className="gradient-bg border-0 text-white hover:opacity-90">
            Next
          </Button>
        </div>
      </header>

      {/* Selected image preview */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="aspect-square bg-muted"
      >
        <img
          src={post1}
          alt="Selected"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Create options */}
      <div className="border-b border-border px-4 py-4">
        <div className="flex gap-4">
          {createOptions.map((option, index) => (
            <motion.button
              key={option.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-1 flex-col items-center gap-2 rounded-xl p-4 transition-colors ${
                index === 0 ? "bg-secondary" : "hover:bg-secondary/50"
              }`}
            >
              <option.icon className={`h-6 w-6 ${index === 0 ? "text-accent" : "text-muted-foreground"}`} />
              <span className="text-xs font-medium">{option.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="px-4 py-4">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-medium">Gallery</span>
          <button className="flex items-center gap-2 text-sm text-muted-foreground">
            <Camera className="h-4 w-4" />
            Camera
          </button>
        </div>

        <div className="grid grid-cols-4 gap-0.5">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className={`aspect-square cursor-pointer overflow-hidden ${
                index === 0 ? "ring-2 ring-accent" : ""
              }`}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
