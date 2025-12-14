import { Avatar } from "@/components/ProfileAvatar";
import { BottomNav } from "@/components/BottomNav";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import { useState } from "react";

import avatarMain from "@/assets/avatar-main.jpg";
import post1 from "@/assets/post-1.jpg";
import post2 from "@/assets/post-2.jpg";
import post3 from "@/assets/post-3.jpg";

interface Story {
  id: string;
  username: string;
  avatar: string;
  hasStory: boolean;
  hasSeen: boolean;
}

interface Post {
  id: string;
  username: string;
  avatar: string;
  image: string;
  likes: number;
  caption: string;
  comments: number;
  timeAgo: string;
}

const stories: Story[] = [
  { id: "your", username: "Your story", avatar: avatarMain, hasStory: false, hasSeen: false },
  { id: "1", username: "designlab", avatar: avatarMain, hasStory: true, hasSeen: false },
  { id: "2", username: "artdaily", avatar: avatarMain, hasStory: true, hasSeen: false },
  { id: "3", username: "minimal", avatar: avatarMain, hasStory: true, hasSeen: true },
  { id: "4", username: "studio", avatar: avatarMain, hasStory: true, hasSeen: true },
];

const posts: Post[] = [
  {
    id: "1",
    username: "designstudio",
    avatar: avatarMain,
    image: post1,
    likes: 1234,
    caption: "Morning essentials ☕ Starting the day right with a clear mind and fresh ideas.",
    comments: 45,
    timeAgo: "2h",
  },
  {
    id: "2",
    username: "creativespace",
    avatar: avatarMain,
    image: post2,
    likes: 892,
    caption: "Natural light makes all the difference. New studio setup coming together.",
    comments: 23,
    timeAgo: "5h",
  },
  {
    id: "3",
    username: "foodartist",
    avatar: avatarMain,
    image: post3,
    likes: 2156,
    caption: "Simple pleasures. Homemade avocado toast on a lazy Sunday morning.",
    comments: 89,
    timeAgo: "8h",
  },
];

export default function Index() {
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const [savedPosts, setSavedPosts] = useState<Set<string>>(new Set());

  const toggleLike = (postId: string) => {
    setLikedPosts((prev) => {
      const next = new Set(prev);
      if (next.has(postId)) {
        next.delete(postId);
      } else {
        next.add(postId);
      }
      return next;
    });
  };

  const toggleSave = (postId: string) => {
    setSavedPosts((prev) => {
      const next = new Set(prev);
      if (next.has(postId)) {
        next.delete(postId);
      } else {
        next.add(postId);
      }
      return next;
    });
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="font-display text-2xl font-bold gradient-text">Instogram</h1>
          <div className="flex items-center gap-4">
            <button className="text-foreground">
              <Heart className="h-6 w-6" />
            </button>
            <button className="text-foreground">
              <Send className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Stories */}
      <div className="border-b border-border">
        <div className="flex gap-4 overflow-x-auto px-4 py-4 scrollbar-hide">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center gap-1"
            >
              <Avatar
                src={story.avatar}
                alt={story.username}
                size="lg"
                hasStory={story.hasStory}
                hasSeen={story.hasSeen}
              />
              <span className="w-16 truncate text-center text-xs text-muted-foreground">
                {story.username}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Feed */}
      <div className="divide-y divide-border">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="pb-4"
          >
            {/* Post header */}
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-3">
                <Avatar src={post.avatar} alt={post.username} size="sm" hasStory />
                <div>
                  <p className="text-sm font-semibold">{post.username}</p>
                </div>
              </div>
              <button className="text-muted-foreground">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>

            {/* Post image */}
            <div
              className="relative aspect-square cursor-pointer"
              onDoubleClick={() => toggleLike(post.id)}
            >
              <img
                src={post.image}
                alt={`Post by ${post.username}`}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Post actions */}
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-4">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleLike(post.id)}
                  className={likedPosts.has(post.id) ? "text-destructive" : "text-foreground"}
                >
                  <Heart
                    className={`h-6 w-6 transition-all ${
                      likedPosts.has(post.id) ? "animate-like-pop" : ""
                    }`}
                    fill={likedPosts.has(post.id) ? "currentColor" : "none"}
                  />
                </motion.button>
                <button className="text-foreground">
                  <MessageCircle className="h-6 w-6" />
                </button>
                <button className="text-foreground">
                  <Send className="h-6 w-6" />
                </button>
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => toggleSave(post.id)}
                className="text-foreground"
              >
                <Bookmark
                  className="h-6 w-6"
                  fill={savedPosts.has(post.id) ? "currentColor" : "none"}
                />
              </motion.button>
            </div>

            {/* Likes */}
            <div className="px-4">
              <p className="text-sm font-semibold">
                {formatNumber(post.likes + (likedPosts.has(post.id) ? 1 : 0))} likes
              </p>
            </div>

            {/* Caption */}
            <div className="mt-1 px-4">
              <p className="text-sm">
                <span className="font-semibold">{post.username}</span>{" "}
                {post.caption}
              </p>
            </div>

            {/* Comments link */}
            <button className="mt-1 px-4 text-sm text-muted-foreground">
              View all {post.comments} comments
            </button>

            {/* Time */}
            <p className="mt-1 px-4 text-xs text-muted-foreground uppercase">
              {post.timeAgo} ago
            </p>
          </motion.article>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
