import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { DefaultUi, Player, Youtube } from '@vime/react';

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
        <div className="flex-1">
          <div className="flex flex-col justify-center bg-black">
            <div className="w-full h-full max-w-6xl max-h-[calc(60vh+7rem)] aspect-video mx-auto">
              <Player>
                <Youtube videoId="SO4-izct7Mc" key={1} />
                <DefaultUi />
              </Player>
            </div>
          </div>
        </div>
      )}
      <SideBar />
    </div>
  );
}
