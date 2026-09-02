import type { AnchorHTMLAttributes, ReactNode } from "react";

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "solid" | "outline";
}

const base =
  "inline-flex items-center gap-2 rounded-[3px] px-6 py-3.5 font-sans text-[15px] font-semibold transition-colors duration-200";

const variants = {
  solid: "bg-accent text-accent-contrast hover:bg-accent-hover",
  outline:
    "border border-white/20 text-text-primary hover:border-accent hover:text-accent",
};

export function LinkButton({
  children,
  variant = "outline",
  className,
  ...props
}: LinkButtonProps) {
  return (
    <a className={[base, variants[variant], className].filter(Boolean).join(" ")} {...props}>
      {children}
    </a>
  );
}
