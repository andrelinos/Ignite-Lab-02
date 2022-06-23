import { SideBar } from '~/components/Sidebar';
import { Video } from '~/components/Video';

export default function Event() {
  return (
    <div className="flex min-h-screen">
      <Video />
      <SideBar />
    </div>
  );
}
