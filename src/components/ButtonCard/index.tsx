import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { CaretRight } from 'phosphor-react';

interface CardProps {
  title: string;
  url: string;
  icon: ReactNode;
  text: string;
  route?: 'out' | 'in';
}

export function ButtonCard({
  title,
  url,
  icon,
  text,
  route = 'in',
}: CardProps) {
  if (route === 'in') {
    return (
      <Link
        to={url}
        className="relative flex max-w-lg min-h-[100px] items-stretch gap-6 bg-brand-gray-700 rounded
                overflow-hidden hover:bg-brand-gray-600 transition-colors"
        rel="noreferrer"
      >
        <div className="flex h-full p-2 lg:p-6 items-center bg-brand-green-700">
          {icon && icon}
        </div>
        <div className="flex-1 py-4 lg:py-6 leading-relaxed">
          <strong className="lg:text-xl">{title}</strong>
          <p className="text-sm max-w-[190px] text-brand-gray-200 truncate">
            {text}
          </p>
        </div>
        <div className="absolute top-0 right-0 flex h-full p-2 lg:p-6 items-center">
          <CaretRight size={24} />
        </div>
      </Link>
    );
  }
  return (
    <a
      href={url}
      className="relative flex max-w-lg min-h-[100px] items-stretch gap-6 bg-brand-gray-700 rounded
                overflow-hidden hover:bg-brand-gray-600 transition-colors"
      rel="noreferrer"
    >
      <div className="flex h-full p-2 lg:p-6 items-center bg-brand-green-700">
        {icon && icon}
      </div>
      <div className="flex-1 py-4 lg:py-6 leading-relaxed">
        <strong className="lg:text-xl">{title}</strong>
        <p className="text-sm max-w-[190px] sm:max-w-lg text-brand-gray-200 truncate">
          {text}
        </p>
      </div>
      <div className="absolute top-0 right-0 flex h-full p-2 lg:p-6 items-center">
        <CaretRight size={24} />
      </div>
    </a>
  );
}
