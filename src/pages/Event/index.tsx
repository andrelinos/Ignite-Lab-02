import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { SideBar } from '~/components/Sidebar';
import { Video } from '~/components/Video';

export default function Event() {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    console.log('data: => ', slug);
  }, [slug]);

  return (
    <div className="flex min-h-screen">
      {slug ? (
        <Video lessonSlug={slug} />
      ) : (
        <div className="flex justify-center items-center flex-1 ">
          Selecione um vídeo para assistir.
        </div>
      )}
      <SideBar />
    </div>
  );
}
