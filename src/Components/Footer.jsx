import React from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Teams", href: "/teams" },
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
  return (
    <footer className="w-full bg-[#FFFFFF]/10 rounded-t-3xl mt-8 py-4 md:py-12 text-white">
      <div className="max-w-6xl px-4 mx-auto flex flex-row items-stretch justify-between overflow-hidden">
        {/* Left: ACS INTERNS 2025 */}
        <div className="flex flex-col justify-center items-start min-w-0 flex-0 md:flex-1">
          <span className="font-urbanist text-2xl md:text-7xl break-words">
            ACS
            <br />
            INTERNS
          </span>
          <span className="font-urbanist text-2xl md:text-7xl font-bold text-[#ff2a00]">
            2025
          </span>
        </div>

        <div className="flex flex-row items-center justify-between gap-0">
          {/* Center: Navigation */}
          <div className="flex flex-row items-center justify-center min-w-0 gap-3 md:gap-10 flex-1 md:flex-0 md:mr-6">
            <span className="[writing-mode:vertical-lr] rotate-180 text-3xl md:text-4xl font-urbanist writing-mode-vertical text-[#FFFFFF]/60 select-none whitespace-nowrap">
              NAVIGATION
            </span>
            <div className="flex flex-col gap-2 md:gap-4 items-start min-w-0">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className={`text-sm md:text-base text-white hover:underline hover:text-[#FF0000] whitespace-nowrap`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          {/* Right: Creators in two columns */}
          <div className="flex flex-row items-center justify-end min-w-0 flex-1 gap-3 md:gap-10">
            <span className="[writing-mode:vertical-lr] rotate-180 text-3xl md:text-4xl text-[#FFFFFF]/60">
              CREATORS
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-y-4 md:gap-x-20 w-full text-left mr-8">
              {creators.map((creator, idx) => (
                <a
                  key={idx}
                  href={creator[1]}
                  target="_blank"
                  className="text-xs md:text-sm text-white hover:underline hover:text-[#FF0000] text-left"
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
