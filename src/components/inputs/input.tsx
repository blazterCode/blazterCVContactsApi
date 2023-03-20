import { UseFormRegister } from 'react-hook-form';
import { TypeFormContact } from '../../types/type.Forms';
import { Message } from '../alerts/message';

type Props = {
  type: 'text' | 'password';
  name: keyof TypeFormContact;
  placeholder: string;
  register: UseFormRegister<TypeFormContact>;
  errorMessage?: string;
  validations: Record<string, unknown>;
  defaultValue?: string;
};

export const Input = ({
  name,
  type,
  placeholder,
  register,
  errorMessage,
  validations,
  defaultValue,
}: Props) => {
  return (
    <fieldset>
      <input
        type={type}
        placeholder={placeholder}
        autoComplete='off'
        defaultValue={defaultValue}
        {...register(name, validations)}
      />
      <div>{errorMessage && <Message message={errorMessage} />}</div>
    </fieldset>
  );
};
