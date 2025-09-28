import React from "react";

export interface TypographyProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "body1" | "body2" | "body3";
  children: React.ReactNode;
}

const variantMapping: { [key in TypographyProps["variant"]]: string } = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-bold",
  h3: "text-2xl font-semibold",
  h4: "text-xl font-semibold",
  h5: "text-lg font-medium",
  body1: "text-base",
  body2: "text-sm",
  body3: "text-xs",
};

export const Typography = ({ variant, children }: TypographyProps) => {
  const className = variantMapping[variant];

  switch (variant) {
    case "h1":
      return <h1 className={className}>{children}</h1>;
    case "h2":
      return <h2 className={className}>{children}</h2>;
    case "h3":
      return <h3 className={className}>{children}</h3>;
    case "h4":
      return <h4 className={className}>{children}</h4>;
    case "h5":
      return <h5 className={className}>{children}</h5>;
    default:
      return <p className={className}>{children}</p>;
  }
};
