import React from "react";

/**
 * Reusable Button component
 * props:
 * - children
 * - className
 * - as (optional) - render element type (button, a, etc.)
 * - ...rest
 */
export default function Button({ children, className = "", as = "button", ...rest }) {
  const Component = as;
  return (
    <Component className={`btn btn-primary ${className}`} {...rest}>
      {children}
    </Component>
  );
}
