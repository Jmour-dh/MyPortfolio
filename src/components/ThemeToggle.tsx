import  { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  // Initialiser le thème depuis localStorage ou définir "light" par défaut
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    return savedTheme || "light";
  });

  // Appliquer la classe du thème au body lors du montage
  useEffect(() => {
    document.body.classList.add(theme);
  }, [theme]); // Exécuter uniquement lorsque le thème change

  // Basculer entre les thèmes
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Vérifier si le composant est rendu côté client
  if (typeof window === "undefined") {
    return null; // Ne rien rendre côté serveur
  }

  return (
    <button
      onClick={toggleTheme}
      className="icon-btn"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}