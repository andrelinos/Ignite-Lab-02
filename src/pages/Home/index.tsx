import { Link } from 'react-router-dom';

import { Card } from '~/components/Video/Card';

export default function Home() {
  return (
    <div className="w-full h-[calc(100vh-20rem)] bg-brand-gray-900">
      <div
        className="w-full h-full flex bg-gradient-to-tr
      from-brand-green-700 to-brand-gray-900 bg-opacity-10"
      >
        <Link to="/event">Evento</Link>
      </div>
    </div>
  );
}
