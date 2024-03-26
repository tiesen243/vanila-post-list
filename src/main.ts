import Header from "./components/header";
import { PostList } from "./components/posts";
import { ChangeThemeBtn } from "./scritps/theme";

import "./styles/global.css";
import styles from "./styles/layout.module.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    ${Header()}
    <main class="${styles.container} ${styles.main}">
      <section class="${styles.card__list}">
        ${PostList()}
      </section>
    </main>

    <footer>
      <p class="${styles.footer}">Page footer</p>
    </footer>
`;

ChangeThemeBtn(document.querySelector<HTMLButtonElement>(".ThemeBtn")!);
