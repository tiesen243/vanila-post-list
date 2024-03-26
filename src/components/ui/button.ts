import styles from "../../styles/button.module.css";

interface ButtonProps {
  className?: string;
  btnText: string;
  variant?: "primary" | "secondary" | "destructive" | "outline";
  size?: "sm" | "md" | "lg" | "icon";
  isDisabled?: boolean;
}

const Button = ({
  btnText,
  className = "",
  variant = "primary",
  size = "md",
  isDisabled = false,
}: ButtonProps) => `
    <button 
      class="${styles.btn} ${styles[variant]} ${styles[size]} ${className}"
      ${isDisabled ? "disabled" : ""}
    >
    ${btnText}
    </button>
  `;

export default Button;
