import styles from "../styles/header.module.css";
import layoutStyles from "../styles/layout.module.css";
import Button from "./ui/button";

const Header = () => {
  return `
    <header class="${styles.header}">
      <div class="${layoutStyles.container} ${styles.wrapper}"> 
        <a href="/" class="${styles.logo}">
          <h1 class="${styles.title}">Tiesen</h1>
        </a>

        ${Button({ btnText: "Change Theme", className: "ThemeBtn" })}
      </div>
    </header>
`;
};

export default Header;
