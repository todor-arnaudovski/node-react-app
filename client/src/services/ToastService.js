import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const autoCloseTime = 3000;

export const toastError = (message) => {
  return toast.error(message, {
    position: 'top-center',
    autoClose: autoCloseTime,
  });
};

export const toastSuccess = (message) => {
  return toast.success(message, {
    position: 'top-center',
    autoClose: autoCloseTime,
  });
};