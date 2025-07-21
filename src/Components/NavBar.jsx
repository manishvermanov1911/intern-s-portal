import React, { useState } from "react";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Teams", href: "#" },
  { name: "Journal", href: "#" },
  { name: "FAQs", href: "#" },
  { name: "Gallery", href: "#" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="ml-4">
        <span className="text-5xl font-extrabold text-[#ff2a00] select-none">A</span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex mr-8">
        <div className="flex gap-8 bg-white/20 rounded-full px-8 py-2 items-center shadow-md">
          {navItems.map((item, idx) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-white font-medium transition-colors duration-200 ${idx === 0 ? "font-bold" : ""}`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* Hamburger for Mobile */}
      <button
        className="md:hidden mr-4 z-20"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
        </svg>
      </button>

      {/* Mobile Modal Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-[#8a2040] to-[#7a0000] flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          <div className="flex flex-col gap-8">
            {navItems.map((item, idx) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-white text-2xl font-medium ${idx === 0 ? "font-bold" : ""}`}
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