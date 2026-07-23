"use client";

import Button from "react-bootstrap/Button";
import { useTheme } from "@/context/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      variant="outline-secondary"
      size="sm"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      <i className={`bi ${theme === "dark" ? "bi-sun" : "bi-moon-stars"}`} />
    </Button>
  );
}
