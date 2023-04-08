import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme/themeContext';
import Icon from '../icons/icon';

const SocialMedia: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className='div-social-media'>
      <a
        href='https://www.instagram.com/blazter.code/?hl=es-la'
        target='_bank'
        className={`icon icon-${theme}`}
      >
        <Icon nameClass='fa fas fa-instagram fa-2x' />
      </a>
      <a
        href='https://github.com/blazterCode'
        target='_bank'
        className={`icon icon-${theme}`}
      >
        <Icon nameClass='fa fas fa-github fa-2x' />
      </a>
      <a
        href='https://api.whatsapp.com/send/?phone=573117573060'
        target='_bank'
        className={`icon icon-${theme}`}
      >
        <Icon nameClass='fa fas fa-whatsapp fa-2x' />
      </a>
    </div>
  );
};

export default SocialMedia;
