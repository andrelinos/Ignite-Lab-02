import { Lesson } from '~/components/Lesson';
import { useGetLessonsQuery } from '~/graphql/generated';

export function SideBar() {
  const { data } = useGetLessonsQuery();

  return (
    <div
      className="w-[21.75rem] bg-brand-gray-700 p-6 border-1 border-brand-gray-600
         flex flex-col rounded-tl-md"
    >
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-brand-gray-500 block">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons?.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            availableAt={new Date(lesson.availableAt)}
            slug={lesson.slug}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </div>
  );
}
