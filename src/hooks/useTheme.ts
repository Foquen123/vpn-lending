// hooks/useTheme.ts
import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | null;

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(null);
  const applyTheme = (newTheme: Theme) => {
    if (newTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };
  useEffect(() => {

    // Проверяем сохраненную тему или системные настройки
    const savedTheme = localStorage.getItem('theme') as Theme;
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;

    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};
