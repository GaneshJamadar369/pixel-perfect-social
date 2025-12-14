import { cn } from "@/lib/utils";

interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl";
  hasStory?: boolean;
  hasSeen?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-20 h-20",
  xl: "w-32 h-32",
};

const ringClasses = {
  sm: "p-0.5",
  md: "p-0.5",
  lg: "p-1",
  xl: "p-1.5",
};

export function Avatar({
  src,
  alt,
  size = "md",
  hasStory = false,
  hasSeen = false,
  className,
}: AvatarProps) {
  if (hasStory) {
    return (
      <div
        className={cn(
          "rounded-full",
          ringClasses[size],
          hasSeen ? "bg-muted" : "gradient-bg",
          className
        )}
      >
        <div className="rounded-full bg-background p-0.5">
          <img
            src={src}
            alt={alt}
            className={cn(sizeClasses[size], "rounded-full object-cover")}
          />
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={cn(sizeClasses[size], "rounded-full object-cover", className)}
    />
  );
}
