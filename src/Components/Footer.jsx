import React from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Teams", href: "/teams" },
  { name: "Journal", href: "/journal" },
  { name: "FAQs", href: "/faqs" },
  { name: "Gallery", href: "/gallery" },
];

const creators = [
  ["@pranjalr", "https://linkedin.com/in/pranjal-rastogi-pjr"],
 
  ["@harshithas", "https://url.to/harshithas"],
  ["@snehadange", "www.linkedin.com/in/sneha-dange-2002021b8"],
  ["@arshitt", "https://www.linkedin.com/in/arshit-tiwari/"],
  ["@piyushpatel", "https://www.linkedin.com/in/piyush-patel-03236b250/"],
  ["@priyasing", "https://www.linkedin.com/in/priya-singh-8a2050216/"],
  ["@saumyad", "www.linkedin.com/in/dwivedisaumya"],
  ["@bharlalka", "https://www.linkedin.com/in/bhavya-harlalka-16774a318/"],
  ["@manishverma", "https://url.to/manishv"],
  ["@amansingla", "https://www.linkedin.com/in/aman-singla-7a481a160/"],
  ["@yrautela", "https://www.linkedin.com/in/yajvin-rautela-a02142253/"],
  ["@shchaurasia", "https://www.linkedin.com/in/shruti-chaurasia-8890bb211/"],
];

export default function Footer() {
  const leftCreators = creators.slice(0, 6);
  const rightCreators = creators.slice(6, 12);

  return (
    <footer className="w-full bg-[#1a1a1a] rounded-t-3xl px-4 sm:px-8 mt-2 py-12 text-white overflow-hidden">
      <div className="max-w-6xl w-full mx-auto flex flex-row items-stretch justify-between">
        {/* Left: ACS INTERNS 2025 */}
        <div className="flex flex-col justify-center items-start min-w-0 flex-1 pl-8 sm:pl-16">
          <span className="font-urbanist text-5xl sm:text-6xl md:text-7xl break-words">
            ACS
            <br />
            INTERNS
          </span>
          <span className="font-urbanist text-5xl sm:text-6xl md:text-7xl font-bold text-[#ff2a00] mt-2">
            2025
          </span>
        </div>

        {/* Center: Navigation */}
        <div className="flex flex-row items-center justify-center min-w-0 flex-1 gap-6 md:gap-10 overflow-hidden">
          <span className="[writing-mode:vertical-lr] rotate-180 text-4xl font-urbanist writing-mode-vertical text-gray-400 select-none whitespace-nowrap">
            NAVIGATION
          </span>
          <div className="flex flex-col gap-4 items-start min-w-0">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm sm:text-base text-white hover:underline transition-colors whitespace-nowrap`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Creators in two columns */}
        <div className="flex flex-row items-center justify-end min-w-0 flex-1 gap-6 md:gap-10 overflow-hidden">
          <span className="[writing-mode:vertical-lr] rotate-180 text-4xl text-gray-400 select-none whitespace-nowrap">
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
  );
}
