import { BottomNav } from "@/components/BottomNav";
import { Avatar } from "@/components/ProfileAvatar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import avatarMain from "@/assets/avatar-main.jpg";
import post1 from "@/assets/post-1.jpg";

interface ActivityItem {
  id: string;
  type: "like" | "follow" | "comment" | "mention";
  user: {
    username: string;
    avatar: string;
  };
  content?: string;
  post?: string;
  timeAgo: string;
}

const activities: ActivityItem[] = [
  {
    id: "1",
    type: "follow",
    user: { username: "designstudio", avatar: avatarMain },
    timeAgo: "2h",
  },
  {
    id: "2",
    type: "like",
    user: { username: "creativemind", avatar: avatarMain },
    post: post1,
    timeAgo: "3h",
  },
  {
    id: "3",
    type: "comment",
    user: { username: "artdaily", avatar: avatarMain },
    content: "Love this aesthetic! 🌿",
    post: post1,
    timeAgo: "5h",
  },
  {
    id: "4",
    type: "mention",
    user: { username: "minimalvibes", avatar: avatarMain },
    content: "Check out @minimal.alex's work!",
    timeAgo: "8h",
  },
  {
    id: "5",
    type: "follow",
    user: { username: "studiospace", avatar: avatarMain },
    timeAgo: "1d",
  },
  {
    id: "6",
    type: "like",
    user: { username: "cleardesign", avatar: avatarMain },
    post: post1,
    timeAgo: "1d",
  },
];

export default function Activity() {
  const renderActivityText = (activity: ActivityItem) => {
    switch (activity.type) {
      case "follow":
        return "started following you.";
      case "like":
        return "liked your photo.";
      case "comment":
        return `commented: ${activity.content}`;
      case "mention":
        return `mentioned you: ${activity.content}`;
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="px-4 py-4">
          <h1 className="font-display text-xl font-semibold">Activity</h1>
        </div>
      </header>

      <div className="divide-y divide-border">
        <div className="px-4 py-3">
          <h2 className="text-sm font-semibold">Today</h2>
        </div>

        {activities.slice(0, 3).map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex items-center gap-3 px-4 py-3"
          >
            <Avatar
              src={activity.user.avatar}
              alt={activity.user.username}
              size="md"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm">
                <span className="font-semibold">{activity.user.username}</span>{" "}
                {renderActivityText(activity)}{" "}
                <span className="text-muted-foreground">{activity.timeAgo}</span>
              </p>
            </div>
            {activity.type === "follow" ? (
              <Button size="sm" variant="secondary" className="text-xs font-semibold">
                Following
              </Button>
            ) : activity.post ? (
              <img
                src={activity.post}
                alt="Post"
                className="h-10 w-10 rounded object-cover"
              />
            ) : null}
          </motion.div>
        ))}

        <div className="px-4 py-3">
          <h2 className="text-sm font-semibold">This Week</h2>
        </div>

        {activities.slice(3).map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: (index + 3) * 0.05 }}
            className="flex items-center gap-3 px-4 py-3"
          >
            <Avatar
              src={activity.user.avatar}
              alt={activity.user.username}
              size="md"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm">
                <span className="font-semibold">{activity.user.username}</span>{" "}
                {renderActivityText(activity)}{" "}
                <span className="text-muted-foreground">{activity.timeAgo}</span>
              </p>
            </div>
            {activity.type === "follow" ? (
              <Button size="sm" variant="secondary" className="text-xs font-semibold">
                Following
              </Button>
            ) : activity.post ? (
              <img
                src={activity.post}
                alt="Post"
                className="h-10 w-10 rounded object-cover"
              />
            ) : null}
          </motion.div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
