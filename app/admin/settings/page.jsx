'use client'
import { useContext, useState, createContext } from 'react';
import Head from 'next/head';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const applyTheme = () => {
    // Ваш код для сохранения выбранной темы (например, использование localStorage или отправка на сервер)

    // Пример сохранения в localStorage
    localStorage.setItem('theme', theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, applyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default function Settings() {
  const { theme, toggleTheme, applyTheme } = useContext(ThemeContext);

  return (
    <div>
      <Head>
        <title>Settings | Admin Panel</title>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>

      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold mb-4">Global Settings</h1>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Theme Settings</h2>

          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Theme:</span>
            <select
              value={theme}
              onChange={toggleTheme}
              className="border-gray-200 rounded p-2 focus:outline-none"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="blue">Blue</option>
              {/* Добавьте любые другие опции темы */}
            </select>
          </div>

          <div className="flex items-center space-x-4 mt-4">
            <span className="text-gray-600">Accent Color:</span>
            <input
              type="color"
              className="h-8 w-8 rounded focus:outline-none border-2 border-gray-200"
            />
          </div>

          <button
            onClick={applyTheme}
            className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4"
          >
            Применить
          </button>
        </div>
      </div>
    </div>
  );
}

export function AppWrapper({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
