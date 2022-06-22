import { gql, useQuery } from '@apollo/client';

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

interface LessonsQuery {
  id: string;
  title: string;
}

export default function App() {
  const { data } = useQuery<{ lessons: LessonsQuery[] }>(GET_LESSONS_QUERY);

  return (
    <div className="App">
      <ul>
        {data?.lessons.map((lesson) => (
          <li key={lesson.id}>{lesson.title}</li>
        ))}
      </ul>
    </div>
  );
}
