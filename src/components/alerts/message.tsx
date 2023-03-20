import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme/themeContext';

type PropsType = {
  message?: string;
};

export const Message = ({ message }: PropsType) => {
  const { theme } = useContext(ThemeContext);
  return <p className={`error-message error-message-${theme}`}>{message}</p>;
};
