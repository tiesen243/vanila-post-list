export const ChangeThemeBtn = (ele: HTMLButtonElement) => {
  const currentTheme = localStorage.getItem("theme") || "light";
  document.documentElement.classList.toggle("dark", currentTheme === "dark");
  ele.textContent = currentTheme === "dark" ? "Light Mode" : "Dark Mode";

  ele.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark", currentTheme === "dark");
    localStorage.setItem("theme", currentTheme === "dark" ? "light" : "dark");
    window.location.reload();
  });
};
