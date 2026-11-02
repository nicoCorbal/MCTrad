const sizes = { small: "w-8 h-8", medium: "w-12 h-10", large: "w-20 h-16" };

export default function Logo({
  className = "",
  size = "medium",
  decorative = false,
}) {
  return (
    <img
      src="/logo.svg"
      alt={decorative ? "" : "María Ángeles Capas"}
      aria-hidden={decorative ? true : undefined}
      width="80"
      height="64"
      className={`${sizes[size] || sizes.medium} object-contain ${className}`}
    />
  );
}
