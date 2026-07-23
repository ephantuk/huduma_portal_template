import { useTheme } from "@/context/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      className="btn btn-outline-secondary btn-sm"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      <i className={`bi ${theme === "dark" ? "bi-sun" : "bi-moon-stars"}`} />
    </button>
  );
}
