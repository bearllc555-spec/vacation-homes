export function SectionEyebrow({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <p
      className={`text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 ${className}`}
    >
      {children}
    </p>
  );
}
