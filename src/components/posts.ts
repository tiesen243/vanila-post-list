import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

import styles from "../styles/posts.module.css";

interface Post {
  id: string;
  content: string;
  author: {
    id: string;
    name: string;
  };
}
export const PostList = () => {
  document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch(
      "https://next-elysia.vercel.app/api/elysia/post/getAll",
    );

    const data: Post[] = await response.json();

    document.querySelector<HTMLDivElement>("#post-list")!.innerHTML = data
      .map((post) =>
        Card({
          children: CardHeader({
            children: `
              ${CardDescription({ children: post.author.name })}
              ${CardTitle({ children: post.content })}
            `,
          }),
          isPressable: true,
        }),
      )
      .join("");
  });

  return `<section id='post-list' class=${styles.post__list}>Loading...</section>`;
};
