"use client";

import { type ButtonHTMLAttributes, forwardRef } from "react";
import { Link } from "@/i18n/navigation";

type Variant = "primary" | "secondary" | "outline" | "green" | "blue";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
    external?: undefined;
  };

type LinkProps = BaseProps & {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

type Props = ButtonProps | LinkProps;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent-primary hover:bg-accent-primary/90 text-[#0A0A0B] font-semibold",
  secondary:
    "bg-white/10 hover:bg-white/20 text-white border border-white/20",
  outline:
    "border border-white/30 hover:border-accent-primary text-white hover:text-accent-primary",
  green:
    "bg-green hover:bg-green/90 text-white font-semibold",
  blue:
    "bg-blue hover:bg-blue/90 text-white font-semibold",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const baseStyles =
  "inline-flex items-center justify-center rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed tracking-wide";

export const Button = forwardRef<HTMLButtonElement, Props>(
  function Button(props, ref) {
    const { variant = "primary", size = "md" } = props;
    const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`;

    if ("href" in props && props.href !== undefined) {
      const { href, children, className, external } = props as LinkProps;

      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${classes} ${className ?? ""}`}
          >
            {children}
          </a>
        );
      }

      return (
        <Link href={href} className={`${classes} ${className ?? ""}`}>
          {children}
        </Link>
      );
    }

    const { className, children, ...rest } = props as ButtonProps;
    return (
      <button
        ref={ref}
        className={`${classes} ${className ?? ""}`}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
