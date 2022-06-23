import { ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';
import { Link } from 'react-router-dom';

import { CaretRight, FileArrowDown, IconProps } from 'phosphor-react';

interface CardProps {
  title: string;
  url: string;
  icon: ReactNode;
  text: string;
}

export function Card({ title, url, icon, text }: CardProps) {
  return (
    <a
      href={url}
      className="flex max-w-lg items-stretch gap-6 bg-brand-gray-700 rounded
              overflow-hidden hover:bg-brand-gray-600 transition-colors"
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex h-full p-6 items-center bg-brand-green-700">
        {icon && icon}
      </div>
      <div className="flex-1 py-6 leading-relaxed">
        <strong className=" ">{title}</strong>
        <p className="text-sm text-brand-gray-200">{text}</p>
      </div>
      <div className="flex h-full p-6 items-center">
        <CaretRight size={24} />
      </div>
    </a>
  );
}
