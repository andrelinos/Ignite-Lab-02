import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { CheckCircle, Lock } from 'phosphor-react';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
  const { slug: slugUrl } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(
    availableAt,
    // eslint-disable-next-line quotes
    "EEEE ' · 'd' de 'MMMM' · 'k'h'mm",
    {
      locale: ptBR,
    },
  );

  const isActiveLesson = slugUrl === slug;

  return (
    <Link
      to={`${isLessonAvailable ? `/event/lesson/${slug}` : ''}`}
      className={`${
        !isLessonAvailable ? 'cursor-not-allowed opacity-60' : 'group'
      } `}
    >
      <span className="flex text-brand-gray-300 flex-wrap">
        {availableDateFormatted.charAt(0).toUpperCase() +
          availableDateFormatted.slice(1)}
      </span>

      <div
        className={`flex-1 relative rounded border border-brand-gray-500 p-4 mt-2  transition-all-
         group-hover:border-brand-green-500 ease-in duration-300;
          group-hover:border-opacity-70 ${
            isActiveLesson
              ? `bg-brand-green-500 before:absolute before:content-[' '] before:w-4 before:h-4
              before:top-[calc(50%-8px)] before:-left-2 before:bg-brand-green-500
              before:rotate-45 before:rounded-sm before:border before:border-transparent
              before:group-hover:border before:group-hover:border-brand-green-500
              before:group-hover:-translate-x-1`
              : 'group-hover:bg-brand-gray-900 group-hover:bg-opacity-40'
          }`}
      >
        {/* <span
          className={`absolute ${
            isLessonAvailable ? '' : 'hidden'
          } top-[calc(50%-8px)] -left-2 w-4 h-4 bg-brand-green-500 rotate-45
                  rounded-sm`}
        /> */}
        <header className="flex justify-between items-center">
          {isLessonAvailable ? (
            <span
              className={`flex items-center text-xs  font-medium
                gap-2 ${
                  isActiveLesson ? 'text-brand-gray-100' : 'text-brand-blue-500'
                }`}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span
              className="flex items-center text-xs text-brand-orange-500 font-medium
                gap-2"
            >
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className="text-xs rounded py-[0.125rem] px-2 text-white border
                border-brand-green-300 font-bold"
          >
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className="text-brand-gray-200 mt-5 block">{title}</strong>
      </div>
    </Link>
  );
}
