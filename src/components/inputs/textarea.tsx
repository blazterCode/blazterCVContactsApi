import { UseFormRegister } from 'react-hook-form';
import { TypeFormContact } from '../../types/type.Forms';
import { Message } from '../alerts/message';

type Props = {
  name: keyof TypeFormContact;
  placeholder: string;
  register: UseFormRegister<TypeFormContact>;
  errorMessage?: string;
  validations: Record<string, unknown>;
  defaultValue?: string;
};

export const Textarea = ({
  name,
  placeholder,
  register,
  errorMessage,
  validations,
  defaultValue,
}: Props) => {
  return (
    <fieldset>
      <textarea
        autoComplete='off'
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register(name, validations)}
      ></textarea>
      <div> {errorMessage && <Message message={errorMessage} />}</div>
    </fieldset>
  );
};
