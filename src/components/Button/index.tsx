import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: ReactNode;
  url?: string;
  variant?: 'primary' | 'secondary';
  type?: 'submit' | 'button' | 'reset';
  onClick?: (() => void) | undefined | any;
}
export function Button({
  title,
  icon,
  url,
  variant = 'primary',
  type,
  onClick,
  ...rest
}: ButtonProps) {
  if (type) {
    return (
      <button
        // eslint-disable-next-line react/button-has-type
        type={type}
        className={`${
          variant === 'secondary'
            ? ' border border-brand-blue-500 hover:bg-brand-blue-500 hover:text-brand-gray-900'
            : 'bg-brand-green-500 hover:bg-brand-green-700'
        } flex justify-center items-center p-4 text-sm transition-colors disabled:opacity-70
         rounded font-bold uppercase gap-2`}
        {...rest}
        onClick={onClick}
      >
        {title}
      </button>
    );
  }
  return (
    <a
      href={url}
      className={`${
        variant === 'secondary'
          ? ' border border-brand-blue-500 hover:bg-brand-blue-500 hover:text-brand-gray-900'
          : 'bg-brand-green-500 hover:bg-brand-green-700'
      } flex justify-center items-center p-4 text-sm transition-colors disabled:opacity-70
       rounded font-bold uppercase gap-2`}
    >
      {icon}
      {title}
    </a>
  );
}
