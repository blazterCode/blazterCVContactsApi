import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastOptions = {
  position: 'bottom-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined
} as ToastOptions;


export const setSuccessToast = (message: string) => {
  toast.success(message, toastOptions);
};

export const setErrorToast = (message: string) => {
  toast.error(message, toastOptions);
};
