import { Avatar } from "@/components/ProfileAvatar";
import { Button } from "@/components/ui/button";
import { Settings, Grid3X3, Bookmark, UserSquare } from "lucide-react";
import { motion } from "framer-motion";
import avatarImage from "@/assets/avatar-main.jpg";

interface ProfileHeaderProps {
  username: string;
  fullName: string;
  bio: string;
  postsCount: number;
  followersCount: number;
  followingCount: number;
  isOwnProfile?: boolean;
}

export function ProfileHeader({
  username,
  fullName,
  bio,
  postsCount,
  followersCount,
  followingCount,
  isOwnProfile = true,
}: ProfileHeaderProps) {
  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-4 pb-4 pt-6"
    >
      {/* Top bar */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-display text-xl font-semibold">{username}</h1>
        <button className="p-2 text-foreground transition-colors hover:text-muted-foreground">
          <Settings className="h-6 w-6" />
        </button>
      </div>

      {/* Profile info row */}
      <div className="flex items-center gap-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <Avatar src={avatarImage} alt={username} size="xl" hasStory />
        </motion.div>

        {/* Stats */}
        <div className="flex flex-1 justify-around">
          {[
            { label: "Posts", value: postsCount },
            { label: "Followers", value: followersCount },
            { label: "Following", value: followingCount },
          ].map((stat, index) => (
            <motion.button
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="flex flex-col items-center"
            >
              <span className="font-display text-lg font-semibold">
                {formatNumber(stat.value)}
              </span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Bio */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-4"
      >
        <h2 className="font-display font-medium">{fullName}</h2>
        <p className="mt-1 text-sm text-muted-foreground whitespace-pre-line">{bio}</p>
      </motion.div>

      {/* Action buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-5 flex gap-2"
      >
        {isOwnProfile ? (
          <>
            <Button variant="secondary" className="flex-1 font-medium">
              Edit profile
            </Button>
            <Button variant="secondary" className="flex-1 font-medium">
              Share profile
            </Button>
          </>
        ) : (
          <>
            <Button className="flex-1 font-medium gradient-bg border-0 text-white hover:opacity-90">
              Follow
            </Button>
            <Button variant="secondary" className="flex-1 font-medium">
              Message
            </Button>
          </>
        )}
      </motion.div>

      {/* Tab navigation */}
      <div className="mt-6 flex border-t border-border">
        {[
          { icon: Grid3X3, label: "Posts" },
          { icon: UserSquare, label: "Tagged" },
          { icon: Bookmark, label: "Saved" },
        ].map(({ icon: Icon, label }, index) => (
          <button
            key={label}
            className={`flex flex-1 items-center justify-center py-3 transition-colors ${
              index === 0
                ? "border-t-2 border-foreground text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Icon className="h-5 w-5" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}
