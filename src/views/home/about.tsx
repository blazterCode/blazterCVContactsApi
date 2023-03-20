import MainLayout from '../layout/mainLayout';
import Icon from '../../components/icons/icon';
import { RutesButtons, Cv } from '../../utils/rutesButtons';

const About: React.FC = () => {
  const title = 'DISCURSO';
  const body = (
    <div>
      <p>
        <Icon nameClass='fa fas fa-award fa-lg' /> Software Developer,
        Full-Stack.
      </p>
      <div>
        {' '}
        <p>
          Soy un apasionado de la programación, constanstemente estoy buscando
          nuevos lenguajes o herramientas para seguir creciendo, Tengo
          experiencia en la construcción y personalización de sitios web
          completamente adaptables.
        </p>
        <p>
          Opino que la organización y los detalles tambien son algo importante
          ya que destacan la pasión y delicadeza con la que se trabaja, al igual
          pienso que el trabajo en equipo y la buena comunicación son el pilar
          mas grande para cumplir las metas trazadas.
        </p>
      </div>
    </div>
  );

  return (
    <MainLayout
      titleLayout={title}
      body={body}
      rutes={RutesButtons}
      extras={Cv}
    />
  );
};

export default About;
