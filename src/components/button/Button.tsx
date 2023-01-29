import { ReactNode } from "react";
import { twMerge as cx } from "tailwind-merge";

export interface ButtonProps {
  Icon?: ReactNode;
  title?: string;
  className?: string;
  children?: ReactNode;
  onClick?: any;
}
const Button = ({ Icon, title, className, children, onClick }: ButtonProps) => {
  if (Icon) {
    return (
      <button
        className={cx(
          `flex items-center justify-center rounded-full bg-white p-3 outline-none ${className}`
        )}
        onClick={onClick}
      >
        {Icon}
      </button>
    );
  }
  if (title) {
    return (
      <button
        className={cx(`rounded-full bg-white p-3 outline-none ${className}`)}
        onClick={onClick}
      >
        {title}
      </button>
    );
  }

  if (children) {
    return (
      <button
        className={cx(`rounded-full bg-white p-3 outline-none ${className}`)}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={cx(`rounded-full bg-white p-3 outline-none ${className}`)}
      onClick={onClick}
    ></button>
  );
};

export default Button;
