import { IoClose } from 'react-icons/io5';
import { toast } from 'sonner';

interface ToastSuccessProps {
  text: string;
  total: string;
}
interface ToastDetailsProps {
  text: string;
}

export function success({ text, total }: ToastSuccessProps) {
  toast.custom((t) => (
    <div className="w-[356px] h-[70px] relative p-4 bg-green-500 text-emerald-50 box-border border rounded-md font-bold text-md">
      <h1 className="center gap-2 text-left font-bold text-2xl">
        {text}
        {text}
        <span>R${total}</span>
      </h1>
      <button className="absolute top-2 right-2 h-6 w-6 p-0" onClick={() => toast.dismiss(t)}>
        <IoClose size="26" />
      </button>
    </div>
  ));
}

export function details({ text }: ToastDetailsProps) {
  toast.custom((t) => (
    <div className="w-[300px] h-[70px] relative p-4 bg-[var(--background)] box-border border-2 rounded-md dark:border-emerald-200 border-emerald-800">
      <h1 className="text-left font-bold text-md text-emerald-800 dark:text-emerald-200">{text}</h1>
      <button className="absolute top-2 right-2 h-6 w-6 p-0" onClick={() => toast.dismiss(t)}>
        <IoClose size="26" className="text-emerald-950 dark:text-emerald-200" />
      </button>
    </div>
  ));
}

export const info = {
  success,
  details,
};
