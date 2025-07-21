import React, { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Teams", href: "/teams" },
  // { name: "Journal", href: "/journal" },
  { name: "FAQs", href: "/faq" },
  { name: "Gallery", href: "/gallery" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src="/AdobeLogo.svg" alt="Adobe Logo" className="h-8" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-2">
          <div className="flex bg-white/20 rounded-full px-4 py-1 items-center shadow-[0_4px_4px_0_rgba(255,255,255,0.25)_inset] gap-1 backdrop-blur-lg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-body px-3 py-1 rounded-full transition-colors duration-200 text-white hover:font-medium`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Hamburger for Mobile */}
        <button
          className="px-4 py-1 md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-white/20 shadow-[0_4px_4px_0_rgba(255,255,255,0.25)_inset] backdrop-blur-lg z-50"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 my-1 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Nav - Full Screen Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center md:hidden">
          {/* Nav Items - Centered */}
          <div className="flex flex-col items-center space-y-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-body text-white text-2xl font-medium hover:text-gray-300 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
