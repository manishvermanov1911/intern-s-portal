// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ Add this
import './index.css';
import App from './App.jsx';
import NavBar from './Components/NavBar.jsx';
import Footer from './Components/Footer.jsx';
import Background from './Components/background.jsx'; // ✅ Import Background

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>      {/* ✅ Wrap App with Router */}
      <Background />
      <NavBar /> {/* ✅ Include NavBar */}
      <App className="font-body" />
      <Footer /> {/* ✅ Include Footer */}
    </BrowserRouter>
  </StrictMode>
);
