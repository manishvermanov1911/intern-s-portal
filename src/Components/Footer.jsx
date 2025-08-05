import React from "react";

const navLinks = [
  { name: "Home", href: import.meta.env.BASE_URL },
  { name: "Teams", href: import.meta.env.BASE_URL + "teams" },
  { name: "FAQs", href: import.meta.env.BASE_URL + "faq" },
  { name: "Gallery", href: import.meta.env.BASE_URL + "gallery" },
];

const creators = [
  ["@PranjalRastogi", "https://linkedin.com/in/pranjal-rastogi-pjr"],
  ["@HarshithaS", "https://www.linkedin.com/in/harshitha-s-267965248"],
  ["@ManishVerma", "https://www.linkedin.com/in/manish-verma-44b3a311a"],
  ["@Yajvin", "https://www.linkedin.com/in/yajvin-rautela-a02142253/"],
  ["@SnehaDange", "https://www.linkedin.com/in/sneha-dange-2002021b8"],
  ["@Shruti", "https://www.linkedin.com/in/shruti-chaurasia-8890bb211/"],
  ["@BhavyaHarlalka", "https://www.linkedin.com/in/bhavya-harlalka-16774a318/"],
  ["@PriyaSingh", "https://www.linkedin.com/in/priya-singh-8a2050216/"],
  ["@SaumyaDwivedi", "https://www.linkedin.com/in/dwivedisaumya"],
  ["@ArshitTiwari", "https://www.linkedin.com/in/arshit-tiwari/"],
  ["@AmanSingla", "https://www.linkedin.com/in/aman-singla-7a481a160/"],
  ["@PiyushPatel", "https://www.linkedin.com/in/piyush-patel-03236b250/"],
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#FFFFFF]/10 rounded-t-3xl mt-8 py-4 md:py-12 text-white">
      <div className="max-w-6xl px-4 mx-auto flex flex-col md:flex-row items-center md:items-stretch justify-between gap-8 md:gap-0">

        {/* ACS INTERNS 2025 */}
        <div className="flex flex-col justify-center items-center md:items-start flex-0 md:flex-1 text-center md:text-left">
          {/* Mobile View */}
          <div className="block md:hidden text-4xl font-title text-center">
            <span>ACS INTERNS</span>
            <br />
            <span className="font-bold text-[#ff2a00]">2025</span>
          </div>
          {/* Desktop View */}
          <span className="hidden md:block font-title text-7xl">ACS</span>
          <span className="hidden md:block font-title text-7xl">INTERNS</span>
          <span className="hidden md:block font-title text-7xl font-bold text-[#ff2a00]">2025</span>
        </div>

        {/* Mobile View */}
        <div className="w-full md:hidden grid grid-cols-2 gap-8 mt-0">

          {/* NAVIGATION */}
          <div className="flex flex-row items-center justify-center gap-3 ml-[-50px] md:ml-0">
            <span className="[writing-mode:vertical-lr] rotate-180 text-2xl font-title text-[#FFFFFF]/60 select-none whitespace-nowrap">
              NAVIGATION
            </span>
            <div className="flex flex-col gap-2 items-start">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-sm text-white hover:underline hover:text-[#FF0000] whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* CREATORS */}
          <div className="flex flex-row items-center justify-center gap-3 ml-[-80px] md:ml-0">
            <span className="[writing-mode:vertical-lr] rotate-180 text-2xl font-title text-[#FFFFFF]/60 select-none whitespace-nowrap">
              CREATORS
            </span>
            <div className="grid grid-cols-2 gap-x-10 gap-y-2">
              {creators.map((creator, idx) => (
                <a
                  key={idx}
                  href={creator[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white hover:underline hover:text-[#FF0000] whitespace-nowrap"
                >
                  {creator[0]}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Desktop View */}
        <div className="hidden md:flex flex-row items-center justify-between gap-10">

          {/* NAVIGATION */}
          <div className="flex flex-row items-center gap-5 md:mr-6 ml-[-650px]">
            <span className="[writing-mode:vertical-lr] rotate-180 text-4xl font-title text-[#FFFFFF]/60 select-none whitespace-nowrap">
              NAVIGATION
            </span>
            <div className="flex flex-col gap-4 items-start min-w-0">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-base text-white hover:underline hover:text-[#FF0000] whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* CREATORS */}
          <div className="flex flex-row items-center gap-3">
            <span className="[writing-mode:vertical-lr] rotate-180 text-4xl font-title text-[#FFFFFF]/60 select-none whitespace-nowrap">
              CREATORS
            </span>
            <div className="grid grid-cols-2 gap-x-20 gap-y-4 text-left mr-8">
              {creators.map((creator, idx) => (
                <a
                  key={idx}
                  href={creator[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white hover:underline hover:text-[#FF0000] whitespace-nowrap"
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
