import { toast } from 'sonner';

export const useNotify = () => {
  const notify = (message: string) => {
    return toast(message);
  };

  return notify;
};
