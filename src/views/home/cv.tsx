import { useContext } from 'react';
import { Link } from 'react-router-dom';
import SocialMedia from '../../components/social-media/socialMedia';
import { ThemeContext } from '../../contexts/theme/themeContext';
import Icon from '../../components/icons/icon';

import Bootstrap from '../../img/bootstrap.svg';
import Css3 from '../../img/css3.svg';
import Firebase from '../../img/firebase.svg';
import Git from '../../img/git.svg';
import Heroku from '../../img/heroku.svg';
import Html from '../../img/html5.svg';
import Javascript from '../../img/javascript.svg';
import MariaDB from '../../img/mariaDB.svg';
import Mongo from '../../img/mongodb.svg';
import Mysql from '../../img/mysql.svg';
import Node from '../../img/nodejs.svg';
import Python from '../../img/python.svg';
import React from '../../img/react.svg';
import ReactMO from '../../img/reactMo.svg';
import Redux from '../../img/redux.svg';
import Tailwind from '../../img/tailwind.svg';
import Express from '../../img/express-original-wordmark.svg';

const Cv: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`main main-${theme}`}>
      <div className={`container-cv container-cv-${theme}`}>
        <div className='cv-title'>
          <div className='separator  separator-cv-content'>
            {' '}
            <h1>ACERCA DE MÍ</h1>
          </div>
          <Link to='/About' className={`button button-${theme}`}>
            VOLVER
          </Link>
        </div>

        <div className='cv-left'>
          <h3>
            {' '}
            <Icon nameClass='fa fas fa-check' />
            PERFIL
          </h3>
          <div>
            <p>
              Enfocado en los fundamentos Y arquitecturas básicas de la web.
              tengo experiencia en frameworks frontend como React
            </p>
            <p>BackEnd como Node.js</p>

            <p>
              {' '}
              Generadores de CSS como TailwindCSS, Bootstrap o Bulma para
              acelerar la creacion de proyectos.
            </p>
            <p> Estoy muy motivado en ampliar mis horizontes día a día.</p>
          </div>

          <div className=' separator separator-cv-content'></div>

          <h3>
            {' '}
            <Icon nameClass='fa fas fa-check' />
            CONOCIMIENTOS A EXPANDIR
          </h3>
          <div className='Skils'>
            <img src={Python} />
            <img src={ReactMO} />
            <img src={Git} />
          </div>
          <div className=' separator separator-cv-content'></div>

          <h3>
            {' '}
            <Icon nameClass='fa fas fa-check' />
            CONOCIMIENTOS Y HERRAMIENTAS
          </h3>
          <div className='Skils'>
            {' '}
            <img src={Bootstrap} />
            <img src={Css3} />
            <img src={Git} />
            <img src={Heroku} />
            <img src={Html} />
            <img src={Javascript} />
            <img src={Node} />
            <img src={Express} />
            <img src={React} />
            <img src={Tailwind} />
            <img src={Redux} />
            <h4>
              {' '}
              <Icon nameClass='fa fas fa-check' />
              INFRAESTRUCTURA Y BDS
            </h4>
            <img src={Firebase} />
            <img src={MariaDB} />
            <img src={Mongo} />
            <img src={Mysql} />
          </div>
        </div>
        <div className='cv-right'>
          <div className='me'>
            {' '}
            <img src='https://i.imgur.com/vIlFc3E.jpg' alt='foto' />
          </div>
          <div className='cv-contact'>
            {' '}
            <h1>ALEJANDRO HINESTROZA</h1>
            <h2>Desarrollador de software Full-Stack</h2>
            <div className='cv-data'>
              <a
                href='https://drive.google.com/file/d/1D1q6fMydp9MxH1wAyzSE-X1ccip_axWe/view?usp=sharing'
                target='_bank'
                className={`button button-${theme} download_cv`}
              >
                DESCARGAR CV
              </a>
              <h4>
                {' '}
                <Icon nameClass='fa fas fa-award' />
                CONTACTO
              </h4>

              <p>
                {' '}
                <Icon nameClass='fa fas fa-mobile-phone' />
                <a
                  href='https://api.whatsapp.com/send/?phone=573117573060'
                  target='_bank'
                  className={`icon icon-${theme}`}
                >
                  Telefono
                </a>
              </p>
              <p>
                <Icon nameClass='fa fas fa-globe' />
                <Link to='/'>Sitio web</Link>
              </p>
            </div>
            <div className='cv-on-the-web'>
              <h4>
                {' '}
                <Icon nameClass='fa fas fa-award' />
                EN LA WEB
              </h4>
              <p>
                {' '}
                <Icon nameClass='fa fas fa-linkedin' />
                <a
                  href='https://www.linkedin.com/in/alejandrohinestroza'
                  target='_bank'
                  className={`icon icon-${theme}`}
                >
                  linkedIn
                </a>
              </p>
              <p>
                {' '}
                <Icon nameClass='fa fas fa-instagram' />
                <a
                  href='https://www.instagram.com/blazter.code/?hl=es-la'
                  target='_bank'
                  className={`icon icon-${theme}`}
                >
                  Instagram
                </a>
              </p>
              <p>
                {' '}
                <Icon nameClass='fa fas fa-github' />
                <a
                  href='https://github.com/blazterCode'
                  target='_bank'
                  className={`icon icon-${theme}`}
                >
                  GitHub
                </a>
              </p>
              <p>
                {' '}
                <Icon nameClass='fa fas fa-globe' />
                <Link to='/'>Sitio web</Link>
              </p>
            </div>
            <div className='cv-education'>
              <h4>
                <Icon nameClass='fa fas fa-award' />
                EDUCACION
              </h4>
              <p>Tecnologia en sistemas de informacion</p>
              <p>Universidad del valle - Colombia</p>
            </div>
          </div>
        </div>
        <div className='cv-social-media'>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Cv;
