import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { DefaultUi, Player, Youtube } from '@vime/react';
import {
  FacebookLogo,
  House,
  InstagramLogo,
  LinkedinLogo,
  List,
  WhatsappLogo,
  X,
} from 'phosphor-react';

import { About } from '~/components/About';
import { SideBar } from '~/components/Sidebar';
import { Video } from '~/components/Video';

export default function Event() {
  const { slug } = useParams<{ slug: string }>();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.getElementById('sidebar-div')?.classList.add('sidebar-show');
      document.body?.classList.add('scroll');
      window.scrollTo(0, 0);
    } else {
      document.getElementById('sidebar-div')?.classList.remove('sidebar-show');
      document.body?.classList.remove('scroll');
    }
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [slug]);

  return (
    <div id="event-screen" className="flex min-h-screen">
      {slug ? (
        <Video lessonSlug={slug} />
      ) : (
        <div className="flex-1">
          {/* <div className="flex flex-col justify-center bg-black">
            <div
              className="w-full h-full max-w-6xl max-h-[calc(60vh+7rem)] aspect-video
                mx-auto z-0"
            >
              <Player>
                <Youtube videoId="SO4-izct7Mc" key={1} />
                <DefaultUi />
              </Player>
            </div>
          </div> */}
          <div className="bg-blur bg-no-repeat bg-cover">
            <About />
          </div>
        </div>
      )}
      <div
        id="sidebar-div"
        className={`hidden h-screen lg:flex top-[7rem] right-0 overflow-hidden
           lg:mr-1 pb-6 z-0 bg-brand-gray-700 border-b border-brand-gray-300
         `}
      >
        <SideBar />
      </div>
      <div
        className={`fixed flex items-center top-[1rem] right-4 z-40
        lg:hidden gap-1`}
      >
        {!menuOpen && <span className="text-sm">Aulas</span>}
        <button
          type="button"
          className={`w-10 h-10 flex justify-center items-center
          ${!menuOpen ? 'text-brand-blue-500' : 'text-brand-gray-100'}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {!menuOpen ? <List size={40} /> : <X size={40} />}
        </button>
      </div>
      {menuOpen && (
        <div
          id="mobile-buttons"
          className="flex h-16 bg-brand-gray-900 fixed bottom-0 right-0 left-0
            px-6 justify-between items-center bg-opacity-80"
        >
          <button type="button" className="text-brand-green-300">
            <House size={40} weight="thin" />
          </button>
          <button type="button" className="text-brand-green-300">
            <WhatsappLogo size={40} weight="thin" />
          </button>
          <button type="button" className="text-brand-green-300">
            <InstagramLogo size={40} weight="thin" />
          </button>
          <button type="button" className="text-brand-green-300">
            <FacebookLogo size={40} weight="thin" />
          </button>
          <button type="button" className="text-brand-green-300">
            <LinkedinLogo size={40} weight="thin" />
          </button>
        </div>
      )}
    </div>
  );
}
