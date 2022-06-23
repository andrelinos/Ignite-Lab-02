import { ReactNode } from 'react';

interface ButtonProps {
  title: string;
  icon?: ReactNode;
  url: string;
  variant?: 'primary' | 'secondary';
}
export function Button({ title, icon, url, variant = 'primary' }: ButtonProps) {
  return (
    <a
      href={url}
      className={`${
        variant === 'secondary'
          ? ' border border-brand-blue-500 hover:bg-brand-blue-500 hover:text-brand-gray-900'
          : 'bg-brand-green-500 hover:bg-brand-green-700'
      } flex justify-center items-center p-4 text-sm transition-colors
       rounded font-bold uppercase gap-2`}
    >
      {icon}
      {title}
    </a>
  );
}
