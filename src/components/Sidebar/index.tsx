import { Lesson } from '~/components/Lesson';
import { useGetLessonsQuery } from '~/graphql/generated';

export function SideBar() {
  const { data } = useGetLessonsQuery();

  return (
    <div
      className="flex w-full min-h-screen lg:min-w-[21.75rem] lg:w-[21.75rem]
      bg-brand-gray-700 p-6 border-1 border-brand-gray-600 flex-col rounded-tl-md
      overflow-y-scroll sidebar-scroll"
    >
      <span className="flex-1 font-bold text-2xl pb-6 mb-6 border-b border-brand-gray-500 block">
        Cronograma de aulas
      </span>
      <div className="flex-1 flex flex-col gap-8 pb-64 lg:pb-24">
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
