import { ErrorPayload, HTTPStatusCodes, ResponsePayload } from '../../types/type.Request';
import {  registerContact, RegisterParams } from './api';

export const handleRegister = async (params: RegisterParams): Promise<void | ErrorPayload> => {
  const result = await registerContact(params);
  if (result.status === HTTPStatusCodes.CREATED) {
    return;
  }
  return result as ErrorPayload;
};


