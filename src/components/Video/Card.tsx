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
              overflow-hidden hover:bg-brand-gray-600 transition-colors flex-col
              md:flex-row"
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex p-2 lg:p-6 justify-center items-center bg-brand-green-700">
        {icon && icon}
      </div>
      <div className="flex-1 py-6 leading-relaxed">
        <strong className="px-4 text-2xl">{title}</strong>
        <p className="text-md md:text-lg text-brand-gray-200 px-4">{text}</p>
      </div>
      <div className="flex h-full p-2 items-center">
        <CaretRight className="rotate-90 md:rotate-0 mx-auto text-5xl" />
      </div>
    </a>
  );
}
