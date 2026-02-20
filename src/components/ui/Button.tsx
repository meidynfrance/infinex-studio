"use client";

import { type ButtonHTMLAttributes, forwardRef } from "react";
import { Link } from "@/i18n/navigation";

type Variant = "primary" | "secondary" | "outline";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type LinkProps = BaseProps & {
  href: string;
  children: React.ReactNode;
  className?: string;
};

type Props = ButtonProps | LinkProps;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent-primary hover:bg-accent-primary/80 text-white shadow-lg shadow-accent-primary/25",
  secondary:
    "bg-accent-secondary hover:bg-accent-secondary/80 text-white shadow-lg shadow-accent-secondary/25",
  outline:
    "border border-border hover:border-accent-primary text-text-primary hover:text-accent-primary",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const baseStyles =
  "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

export const Button = forwardRef<HTMLButtonElement, Props>(
  function Button(props, ref) {
    const { variant = "primary", size = "md" } = props;
    const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`;

    if ("href" in props && props.href !== undefined) {
      const { href, children, className } = props as LinkProps;
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
