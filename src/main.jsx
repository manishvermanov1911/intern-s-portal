// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ Add this
import './index.css';
import App from './App.jsx';
import NavBar from './Components/NavBar.jsx';
import Footer from './Components/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>      {/* ✅ Wrap App with Router */}
      <NavBar /> {/* ✅ Include NavBar */}
      <App />
      <Footer /> {/* ✅ Include Footer */}
    </BrowserRouter>
  </StrictMode>
);
