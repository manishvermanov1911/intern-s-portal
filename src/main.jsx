// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom"; // ✅ Changed to HashRouter
import "./index.css";
import App from "./App.jsx";
import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
import Background from "./Components/background.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Background />
      <NavBar />
      <App className="font-body" />
      <Footer />
    </HashRouter>
  </StrictMode>,
);
);
