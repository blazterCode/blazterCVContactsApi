import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme/themeContext';
import Icon from '../icons/icon';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      type='button'
      className={`theme-button theme-button-${theme}`}
      onClick={toggleTheme}
    >
      <Icon
        nameClass={`${theme === 'dark' ? 'fa fas fa-sun' : 'fa fas fa-moon'}`}
      />
    </button>
  );
};

export default ThemeSwitcher;
