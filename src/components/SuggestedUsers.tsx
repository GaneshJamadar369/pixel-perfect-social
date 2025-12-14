import { Avatar } from "@/components/ProfileAvatar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import avatarMain from "@/assets/avatar-main.jpg";

interface SuggestedUser {
  id: string;
  username: string;
  name: string;
  avatar: string;
  mutualFollowers?: number;
}

const suggestedUsers: SuggestedUser[] = [
  {
    id: "1",
    username: "designstudio",
    name: "Design Studio",
    avatar: avatarMain,
    mutualFollowers: 12,
  },
  {
    id: "2",
    username: "creativemind",
    name: "Creative Mind",
    avatar: avatarMain,
    mutualFollowers: 8,
  },
  {
    id: "3",
    username: "artdaily",
    name: "Art Daily",
    avatar: avatarMain,
    mutualFollowers: 5,
  },
  {
    id: "4",
    username: "minimalvibes",
    name: "Minimal Vibes",
    avatar: avatarMain,
  },
];

export function SuggestedUsers() {
  return (
    <div className="px-4 py-4">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">
          Suggested for you
        </span>
        <button className="text-xs font-semibold text-foreground hover:text-muted-foreground">
          See All
        </button>
      </div>

      <div className="space-y-3">
        {suggestedUsers.map((user, index) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-3"
          >
            <Avatar src={user.avatar} alt={user.username} size="md" hasStory />
            <div className="flex-1 min-w-0">
              <p className="truncate text-sm font-medium">{user.username}</p>
              <p className="truncate text-xs text-muted-foreground">
                {user.mutualFollowers
                  ? `Followed by ${user.mutualFollowers} you follow`
                  : user.name}
              </p>
            </div>
            <Button
              size="sm"
              className="gradient-bg border-0 text-xs font-semibold text-white hover:opacity-90"
            >
              Follow
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
