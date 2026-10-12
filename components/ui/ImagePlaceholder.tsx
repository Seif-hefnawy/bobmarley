import Image from "next/image";

type ImagePlaceholderProps = {
  src: string | null;
  alt: string;
  className?: string;
  /** Controls placeholder mark size; menu thumbnails want a smaller mark. */
  variant?: "default" | "compact";
  priority?: boolean;
  sizes?: string;
};

/**
 * Renders a next/image when `src` is set, or a tasteful neutral
 * placeholder sized to match when it's null. Keeps layout identical
 * either way so swapping in real photography later never shifts layout.
 */
export default function ImagePlaceholder({
  src,
  alt,
  className = "",
  variant = "default",
  priority = false,
  sizes,
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? undefined : "lazy"}
        sizes={sizes ?? "100vw"}
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-accent-soft/60 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={`stroke-accent ${variant === "compact" ? "h-4 w-4" : "h-8 w-8"}`}
        strokeWidth={1.2}
      >
        <path
          d="M4 17.5 8.5 12l3 3.5L14.5 11 20 17.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="8" cy="8" r="1.6" />
        <rect x="3" y="4" width="18" height="16" rx="1.5" />
      </svg>
    </div>
  );
}
