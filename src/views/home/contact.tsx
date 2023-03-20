import MainLayout from '../layout/mainLayout';
import { RutesButtons } from '../../utils/rutesButtons';

import { useForm } from 'react-hook-form';
import { TypeFormContact } from '../../types/type.Forms';
import { Input } from '../../components/inputs/input';
import { Textarea } from '../../components/inputs/textarea';
//contaxtos
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme/themeContext';
import {
  emailValidations,
  NameValidations,
  MessageValidations,
} from '../../utils/RequiresToInputs';

import { setErrorToast, setSuccessToast } from '../../components/alerts/toasts';
import { handleRegister } from '../../contexts/Contact/handlers';
const Contact: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<TypeFormContact>();

  const handleFormSubmit = async (values: TypeFormContact) => {
    const errorPayload = await handleRegister(values);

    if (errorPayload) {
      setErrorToast(errorPayload.message);
    } else {
      reset();
      setSuccessToast('Mensaje enviado.');
    }
  };

  const title = ' DEJAME UN MENSAJE';
  const body = (
    <form
      className={`form-contact form-contact-${theme} `}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className='div-contact-inputs'>
        <div className='input-user'>
          <Input
            type='text'
            name='name'
            placeholder='Escriba su nombre...'
            register={register}
            validations={NameValidations}
            errorMessage={errors.name?.message}
          />
        </div>

        <div className='input-email'>
          <Input
            placeholder='Escriba su correo...'
            type='text'
            name='email'
            register={register}
            validations={emailValidations}
            errorMessage={errors.email?.message}
          />
        </div>

        <div className='input-textarea'>
          {' '}
          <Textarea
            placeholder='Escriba un mensaje...'
            name='message'
            register={register}
            validations={MessageValidations}
            errorMessage={errors.message?.message}
          ></Textarea>
        </div>
      </div>
      <div className={`button-forms button-forms-${theme}`}>
        <button type='submit'>ENVIAR MENSAJE</button>
      </div>
    </form>
  );

  return <MainLayout titleLayout={title} body={body} rutes={RutesButtons} />;
};

export default Contact;
