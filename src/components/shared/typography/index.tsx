"use client";

import React from "react";

import { cn } from "@/lib/utils";

type TypographyProps = {
  variant?: "h1" | "h2" | "h3" | "p";
  className?: string;
  children: React.ReactNode;
};

const Typography = ({
  variant = "p",
  className,
  children,
}: TypographyProps) => {
  const variantStyles = {
    h1: "w-full scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
    h2: "w-full scroll-m-20 text-3xl font-semibold tracking-tight",
    h3: "w-full scroll-m-20 text-2xl font-semibold tracking-tight",
    p: "leading-7 text-base",
  };

  const Component = variant as keyof JSX.IntrinsicElements;

  return (
    <Component className={cn(variantStyles[variant], className)}>
      {children}
    </Component>
  );
};

export default Typography;
