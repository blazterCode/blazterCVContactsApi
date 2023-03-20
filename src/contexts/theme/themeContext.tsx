import React, { createContext, useCallback, useEffect, useState } from 'react';

export type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => null,
});

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<ThemeContextType['theme']>(
    () => (localStorage.getItem('theme') as ThemeContextType['theme']) || 'dark'
  );

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
