import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/theme/themeContext';

type PropsType = {
  rute: string;
  name: string;
};
const NavigationButtons = ({ rute, name }: PropsType) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Link to={rute} className={`button button-${theme}`}>
      {name}
    </Link>
  );
};

export default NavigationButtons;
