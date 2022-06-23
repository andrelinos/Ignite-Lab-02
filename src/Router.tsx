import { Route, Routes } from 'react-router-dom';

import Contact from './pages/Contact';
import Event from './pages/Event';
import Home from './pages/Home';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event" element={<Event />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
}
