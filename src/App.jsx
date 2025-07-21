import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import { TeamPage } from './Pages/TeamPage';
import FaqPage from './Pages/FaqPage';
import Teams from './Pages/Teams';
import InternProfilePage from './Components/InternProfile';
import ACSTree from './Components/ACSTree'; // ✅ Correctly imported

import interns from './data/interns.json';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/intern/:id" element={<InternProfilePage interns={interns} />} />
      <Route path="/tree" element={<ACSTree />} />
    </Routes>
  );
}

export default App;
