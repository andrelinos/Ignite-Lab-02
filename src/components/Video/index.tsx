import { gql, useQuery } from '@apollo/client';
import { DefaultUi, Player, Youtube } from '@vime/react';
import { Books, DiscordLogo, Image, Lightning } from 'phosphor-react';

import '@vime/core/themes/default.css';

import { Card } from './Card';

import { Button } from '~/components/Button';

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLEssonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      videoId
      description
      teacher {
        avatarURL
        bio
        name
      }
    }
  }
`;

interface LessonProps {
  title: string;
  videoId: string;
  description: string;
  teacher: {
    bio: string;
    avatarURL: string;
    name: string;
  };
}

interface GetLessonBySlugQueryResponse {
  lesson: LessonProps;
}

interface VideoProps {
  lessonSlug: string;
}

export function Video({ lessonSlug }: VideoProps) {
  const { data } = useQuery<GetLessonBySlugQueryResponse>(
    GET_LESSON_BY_SLUG_QUERY,
    {
      variables: { slug: lessonSlug },
      fetchPolicy: 'no-cache',
    },
  );

  if (!data) {
    return (
      <div className="flex flex-1 justify-center items-center">
        <h1>Carregando...</h1>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="flex flex-col justify-center bg-black">
        <div className="w-full h-full max-w-6xl max-h-[calc(60vh+7rem)] aspect-video mx-auto">
          <Player>
            <Youtube videoId={data.lesson.videoId} key={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
        <div className="max-w-6xl mx-auto p-8 ">
          <div className="flex items-start gap-16">
            <div className="flex-1">
              <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
              <p className="mt-4 text-brand-gray-200 leading-relaxed">
                {data.lesson.description}
              </p>
              <div className="flex items-center gap-4 mt-6">
                <img
                  className="w-16 h-16 rounded-full border-2 border-brand-blue-500"
                  src={data.lesson.teacher.avatarURL}
                  alt={data.lesson.teacher.name}
                  srcSet=""
                />
                <div className="leading-relaxed">
                  <strong className="text-xl block">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-brand-gray-200 text-sm block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Button
                title="Comunidade do Discord"
                url="https://discord-service.rocketseat.dev/signin/ignite-lab"
                icon={<DiscordLogo size={24} />}
              />
              <Button
                title="Acesse o desafio"
                url="https://discord-service.rocketseat.dev/signin/ignite-lab"
                icon={<Lightning size={24} />}
                variant="secondary"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-20 max-w-6xl mx-auto">
          <Card
            url="https://efficient-sloth-d85.notion.site/Material-complementar-86d4ef35af16471ebc3ae3eba1a378e5"
            icon={<Books size={40} weight="thin" />}
            text="Acesse o material complementar para acelerar o seu
            desenvolvimento"
            title="Material complementar"
          />

          <Card
            url="https://drive.google.com/drive/folders/1mxWnvlqmH7MbVRv2Na9xFNgCQCygM1iR?usp=sharing"
            icon={<Image size={40} weight="thin" />}
            text="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
            máquina"
            title="Wallpapers exclusivos"
          />
        </div>
      </div>
    </div>
  );
}
