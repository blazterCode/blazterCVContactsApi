import axios from 'axios';
import { TypeFormContact } from '../../types/type.Forms';
import { ErrorPayload, ResponsePayload } from '../../types/type.Request';
import { apiTryCatchHandler } from '../../utils/apiTryCatchHandler';


export type RegisterParams = {
  name: string;
  email: string;
  message:string
}



const authAxios = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL as string,
  withCredentials: true
});

export const registerContact = async (params: RegisterParams): Promise<ResponsePayload<TypeFormContact> | ErrorPayload> =>
  apiTryCatchHandler(async () => {
    const response = await authAxios.post<TypeFormContact>('createContact', params);
    return {
      status: response.status,
      data: response.data
    };
  });
