import { Route, Routes } from 'react-router-dom';

import Contact from './pages/Contact';
import Event from './pages/Event';
import Home from './pages/Home';
import { Subscribe } from './pages/Subscribe';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/event" element={<Event />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
}
