import MainLayout from '../layout/mainLayout';
import Icon from '../../components/icons/icon';
import { RutesButtons } from '../../utils/rutesButtons';

const Home: React.FC = () => {
  const title = 'ALEJANDRO HINESTROZA';
  const body = (
    <div>
      <p>
        <Icon nameClass='fa fas fa-award fa-lg' />
        Desarrollador de Software, Full-Stack.
      </p>

      <div className='list'>
        <div className='list-left'>
          <p>
            <Icon nameClass='fa fas fa-heart ' />
            Edad.
          </p>
          <p>
            <Icon nameClass='fa fas fa-home' /> Residencia.
          </p>
          <p>
            <Icon nameClass='fa fas fa-check' />
            Freelance.
          </p>
          <p>
            <Icon nameClass='fa fas fa-globe' />
            Direccion.
          </p>
        </div>

        <div className='list-right'>
          <p>
            <Icon nameClass='fa fas fa-arrow-right' />
            25 años.
          </p>
          <p>
            <Icon nameClass='fa fas fa-arrow-right' />
            Colombia.
          </p>
          <p>
            <Icon nameClass='fa fas fa-arrow-right' />
            Disponible.
          </p>
          <p>
            <Icon nameClass='fa fas fa-arrow-right' />
            Valle del cauca.
          </p>
        </div>
      </div>
      <p>Gracias por visitar mi portafolio.</p>
    </div>
  );

  return <MainLayout titleLayout={title} body={body} rutes={RutesButtons} />;
};

export default Home;
