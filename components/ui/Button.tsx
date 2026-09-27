import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface BaseProps {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-teal text-base hover:bg-accent-teal/90 shadow-[0_0_0_1px_rgba(84,230,210,0.3)]",
  secondary:
    "bg-transparent text-ink border border-base-border hover:border-accent-teal/60 hover:text-accent-teal",
  ghost: "bg-transparent text-ink-muted hover:text-ink",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors duration-200 focus-ring";

type ButtonAsLink = BaseProps &
  ComponentProps<typeof Link> & { href: string };
type ButtonAsAnchor = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; external?: true };
type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: ButtonAsLink | ButtonAsAnchor | ButtonAsButton) {
  const { variant = "primary", className, children } = props;
  const classes = cn(baseClasses, variantClasses[variant], className);

  if (props.href) {
    const isExternal = props.href.startsWith("http") || props.href.startsWith("mailto:");
    if (isExternal) {
      const { href, ...rest } = props as ButtonAsAnchor;
      return (
        <a
          href={href}
          className={classes}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { ...rest } = props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
