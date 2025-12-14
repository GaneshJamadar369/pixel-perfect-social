import { ProfileHeader } from "@/components/ProfileHeader";
import { PostGrid } from "@/components/PostGrid";
import { BottomNav } from "@/components/BottomNav";

export default function Profile() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <ProfileHeader
        username="minimal.alex"
        fullName="Alex Chen"
        bio="Design & Lifestyle ✨\nCreating calm spaces\n📍 San Francisco"
        postsCount={127}
        followersCount={12400}
        followingCount={384}
        isOwnProfile
      />
      <PostGrid />
      <BottomNav />
    </div>
  );
}
