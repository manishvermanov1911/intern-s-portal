import React from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Teams", href: "/teams" },
  { name: "Journal", href: "/journal" },
  { name: "FAQs", href: "/faqs" },
  { name: "Gallery", href: "/gallery" },
];

const creators = [
  ["@pranjalr", "https://url.to/pranjalr"],
  ["@priyanshu", "https://url.to/priyanshu"],
  ["@harshithas", "https://url.to/harshithas"],
  ["@snehadange", "https://url.to/snehadange"],
  ["@arshittiwari", "https://url.to/arshittiwari"],
  ["@piyush", "https://url.to/piyush"],
  ["@priya", "https://url.to/priya"],
  ["@saumyad", "https://url.to/saumyad"],
  ["@bhavyah", "https://url.to/bhavyah"],
  ["@manishv", "https://url.to/manishv"],
  ["@amans", "https://url.to/amans"],
  ["@yajvinr", "https://url.to/yajvinr"],
  ["@shruti", "https://url.to/shruti"],
];

export default function Footer() {
  const leftCreators = creators.slice(0, 6);
  const rightCreators = creators.slice(6, 12);

  return (
    <>
      <style>
        {`
          .writing-mode-vertical {
            writing-mode: vertical-rl;
            text-orientation: mixed;
            transform: rotate(180deg);
            font-size: 4.5rem;
            line-height: 1.4;
          }
        `}
      </style>

      <footer className="w-full bg-[#1a1a1a] rounded-t-3xl px-4 sm:px-8 py-12 mt-16 text-white overflow-hidden">
        <div className="max-w-screen-xl w-full mx-auto flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-0">
          {/* Left: ACS INTERNS 2025 */}
          <div className="flex flex-col justify-center items-start min-w-0 flex-1 pl-8 sm:pl-16">
            <span className="text-5xl sm:text-6xl md:text-7xl font-light leading-tight break-words">
              ACS
              <br />
              INTERNS
            </span>
            <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#ff2a00] mt-2">
              2025
            </span>
          </div>

          {/* Center: Navigation */}
          <div className="flex flex-row items-center justify-center min-w-0 flex-1 gap-6 md:gap-10 overflow-hidden">
            <span className="writing-mode-vertical text-gray-400 select-none whitespace-nowrap">
              NAVIGATION
            </span>
            <div className="flex flex-col gap-10 items-start min-w-0">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm sm:text-base ${
                    idx === 0 ? "text-[#ff2a00]" : "text-white"
                  } hover:underline transition-colors whitespace-nowrap`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Creators in two columns */}
          <div className="flex flex-row items-center justify-end min-w-0 flex-1 gap-6 md:gap-10 overflow-hidden">
            <span className="writing-mode-vertical text-gray-400 select-none whitespace-nowrap">
              CREATORS
            </span>
            <div className="flex flex-row gap-12">
              <div className="flex flex-col gap-5">
                {leftCreators.map((creator, idx) => (
                  <a
                    key={idx}
                    href={creator[1]}
                    className="text-xs sm:text-sm text-white hover:underline whitespace-nowrap"
                  >
                    {creator[0]}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-5">
                {rightCreators.map((creator, idx) => (
                  <a
                    key={idx + 8}
                    href={creator[1]}
                    className="text-xs sm:text-sm text-white hover:underline whitespace-nowrap"
                  >
                    {creator[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
