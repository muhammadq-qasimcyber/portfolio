import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  as?: "div" | "article" | "li";
}

export function Card({ className, children, as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-xl border border-base-border bg-base-surface/80 backdrop-blur-sm transition-colors duration-200",
        className
      )}
    >
      {children}
    </Tag>
  );
}
