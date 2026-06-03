import type { ElementType, ReactNode } from "react";

type AnimatedHeadingProps = {
  children: ReactNode;
  as?: ElementType;
  variant?: "stagger" | "shimmer" | "shimmer-light";
  className?: string;
};

export function AnimatedHeading({
  children,
  as: Tag = "h2",
  variant = "shimmer",
  className = "",
}: AnimatedHeadingProps) {
  const text = typeof children === "string" ? children : null;

  if (variant === "stagger" && text) {
    const words = text.split(" ");
    return (
      <Tag className={`text-magic-stagger ${className}`}>
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="magic-word"
            style={{ animationDelay: `${0.07 * i + 0.2}s` }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        ))}
      </Tag>
    );
  }

  const magicClass =
    variant === "shimmer-light"
      ? "text-magic-shimmer-light"
      : "text-magic-shimmer";

  return <Tag className={`${magicClass} ${className}`}>{children}</Tag>;
}

/** Shimmer only the last segment after a line break or em dash */
export function AnimatedHeadingLines({
  lines,
  shimmerLastLine = true,
  as: Tag = "h2",
  className = "",
}: {
  lines: string[];
  shimmerLastLine?: boolean;
  as?: ElementType;
  className?: string;
}) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => {
        const isLast = i === lines.length - 1;
        const useShimmer = shimmerLastLine && isLast;
        return (
          <span
            key={line}
            className={`block ${useShimmer ? "text-magic-shimmer" : ""}`}
          >
            {line}
          </span>
        );
      })}
    </Tag>
  );
}
