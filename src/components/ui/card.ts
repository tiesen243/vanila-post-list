import styles from "../../styles/card.module.css";

interface CardProps {
  children: string;

  className?: string;
  isPressable?: boolean;
}
export const Card = ({
  children,
  className = "",
  isPressable = false,
}: CardProps) => {
  return `
    <div class="${styles.card} ${isPressable && styles.isPressable} ${className}">
      ${children}
    </div>
  `;
};

export const CardHeader = ({ children }: { children: string }) => {
  return `
    <div class="${styles.card__header}">
      ${children}
    </div>
  `;
};

export const CardTitle = ({ children }: { children: string }) => `
    <h3 class="${styles.card__title}">
      ${children}
    </h3>
  `;

export const CardDescription = ({ children }: { children: string }) => `
    <p class="${styles.card__description}">
      ${children}
    </p>
  `;

export const CardContent = ({ children }: { children: string }) => `
    <div class="${styles.card__content}">
      ${children}
    </div>
  `;

export const CardFooter = ({ children }: { children: string }) => `
    <div class="${styles.card__footer}">
      ${children}
    </div>
  `;
