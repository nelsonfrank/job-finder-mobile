import { ReactNode } from "react";
import { twMerge as cx } from "tailwind-merge";

export interface ButtonProps {
  Icon?: ReactNode;
  title?: string;
  className?: string;
  children?: ReactNode;
}
const Button = ({ Icon, title, className, children }: ButtonProps) => {
  if (Icon) {
    return (
      <button
        className={cx(
          `flex items-center justify-center rounded-full bg-white p-3 outline-none ${className}`
        )}
      >
        {Icon}
      </button>
    );
  }
  if (title) {
    return (
      <button
        className={cx(`rounded-full bg-white p-3 outline-none ${className}`)}
      >
        {title}
      </button>
    );
  }

  if (children) {
    return (
      <button
        className={cx(`rounded-full bg-white p-3 outline-none ${className}`)}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={cx(`rounded-full bg-white p-3 outline-none ${className}`)}
    ></button>
  );
};

export default Button;
