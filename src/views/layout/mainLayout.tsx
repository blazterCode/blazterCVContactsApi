import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../contexts/theme/themeContext';
import Picture from '../../components/pictures/Picture';
import NavigationButton from '../../components/buttons/NavigationButtons';
import SocialMedia from '../../components/social-media/socialMedia';

function MainLayout({ titleLayout, body, ...props }: any) {
  const { theme } = useContext(ThemeContext);
  const [rutes, setRutes] = useState([]);
  const [buttonExtra, SetbuttonExtra] = useState([]);

  useEffect(() => {
    SetRutes();
  }, [props]);

  const SetRutes = () => {
    setRutes(props && props.rutes);
    SetbuttonExtra(props && props.extras);
  };

  return (
    <div className={`main main-${theme}`}>
      <div className='container'>
        <div className={`left left-${theme}`}>
          <div className='container-left-picture-mobile'>
            <div className='div-pictureSmall'>
              <Picture clase='pictureSmall' recurso='Default' />
            </div>
            <h1 className='titles'>{titleLayout}</h1>
            <div className='button-under-title'>
              {props &&
                buttonExtra !== undefined &&
                buttonExtra.map((item: any, index: any) => {
                  return (
                    <NavigationButton
                      key={index}
                      rute={item.rute}
                      name={item.name}
                    />
                  );
                })}
            </div>
          </div>
          <div className='separator'></div>
          <div>{body}</div>

          <div className='div-buttons-rutes-container'>
            {props &&
              rutes !== undefined &&
              rutes.map((item: any, index: any) => {
                return (
                  <NavigationButton
                    key={index}
                    rute={item.rute}
                    name={item.name}
                  />
                );
              })}
          </div>
          <div className='social_media'>
            {' '}
            <SocialMedia />
          </div>
        </div>{' '}
        <div className='right'>
          <Picture clase='pictureLarge' recurso='Default' />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
