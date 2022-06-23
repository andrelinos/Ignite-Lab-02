import { useParams } from 'react-router-dom';

import { SideBar } from '~/components/Sidebar';
import { Video } from '~/components/Video';

export default function Event() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <div className="flex min-h-screen">
      {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
      <SideBar />
    </div>
  );
}
