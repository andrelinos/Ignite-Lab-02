import { gql, useQuery } from '@apollo/client';

import { Lesson } from '~/components/Lesson';

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`;

interface LessonProps {
  id: string;
  title: string;
  slug: string;
  availableAt: Date;
  lessonType: 'live' | 'class';
}

interface GetLessonsQueryResponse {
  lessons: LessonProps[];
}

export function SideBar() {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);

  return (
    <div
      className="w-[21.75rem] bg-brand-gray-700 p-6 border-1 border-brand-gray-600
          pt-24 flex flex-col"
    >
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-brand-gray-500 black">
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
