import MainLayout from '../layout/mainLayout';
import { RutesButtons } from '../../utils/rutesButtons';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme/themeContext';
import { useNavigate } from 'react-router-dom';
import NavigationButton from '../../components/buttons/NavigationButtons';
import img from '../../img/taladro.svg';

const Login: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();

  const title = 'INGRESAR AL SISTEMA';
  const body = (
    <div className='main-projects'>
      <div>
        <img src={img} alt='foto' className='imgPagInConstruction' />
        <p>
          Esta parte del sitio se encuentra en remodelacion, vuelva al inicio.
          hasta la proxima.
        </p>
        <div className={`button-forms button-forms-${theme}`}>
          <NavigationButton key={'1'} rute={'/'} name={'HOGAR'} />
        </div>
      </div>
    </div>
  );

  return <MainLayout titleLayout={title} body={body} rutes={RutesButtons} />;
};

export default Login;
