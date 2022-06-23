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
  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(
    availableAt,
    // eslint-disable-next-line quotes
    "EEEE ' · 'd' de 'MMMM' · 'k'h'mm",
    {
      locale: ptBR,
    },
  );

  return (
    <a href="http#">
      <span className="flex text-brand-gray-300 flex-wrap">
        {availableDateFormatted}
      </span>
      <div className="rounded border border-brand-gray-500 p-4 mt-2">
        <header className="flex justify-between items-center">
          {isLessonAvailable ? (
            <span
              className="flex items-center text-xs text-brand-blue-500 font-medium
                gap-2"
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
    </a>
  );
}
