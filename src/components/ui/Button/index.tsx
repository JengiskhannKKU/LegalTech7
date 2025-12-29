import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variantClass = variant === "secondary" ? styles.secondary : styles.primary;

  return (
    <button
      {...props}
      className={`${styles.button} ${variantClass} ${className}`.trim()}
    />
  );
}
