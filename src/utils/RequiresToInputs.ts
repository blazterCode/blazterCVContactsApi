import { RegisterOptions } from 'react-hook-form';

export const emailValidations: RegisterOptions = {
  required: {
    value: true,
    message: 'Este campo es requerido',
  },
  minLength: {
    value: 10,
    message: 'Este campo debe tener longitud mínima de 10 caracteres',
  },
  maxLength: {
    value: 100,
    message: 'Este campo debe tener longitud maxima de 100 caracteres',
  },

  validate: {
    hasValidFormat: (email: string) => {
      if (email.includes(' ')) return 'No puede tener espacios';
      if (
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/g.test(
          email
        )
      )
        return true;

      return 'El correo no cumple con la estructura correcta         ';
    },
  },
};



export const NameValidations: RegisterOptions = {
  required: {
    value: true,
    message: 'Este campo es requerido',
  },
  minLength: {
    value: 2,
    message: 'El nombre debe ser de al menos 2 caracteres',
  },
  maxLength: {
    value: 50,
    message: 'El nombre debe ser maximo de 50 caracteres',
  },
};


export const MessageValidations = {
  minLength: {
    value: 1,
    message: 'Este campo debe tener longitud mínima de 1 caracteres',
  },
  maxLength: {
    value: 250,
    message: 'Este campo debe tener longitud maxima de 250 caracteres',
  },
  required: {
    value: true,
    message: 'Este campo es requerido',
  },
};

