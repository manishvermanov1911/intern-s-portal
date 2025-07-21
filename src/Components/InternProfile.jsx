import React from 'react';
import { FaInstagram, FaGithub, FaLinkedinIn, FaArrowLeft } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useParams } from 'react-router-dom';

const InternProfilePage = ({ interns }) => {
  const params = useParams();
  const intern = interns[params.id];

  if (!intern) return <div className="text-white p-10">Intern not found.</div>;

  return (
    <div className="bg-black text-white min-h-screen font-sans px-4 md:px-16 py-8 md:py-12">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:gap-14 items-start">

        {/* Mobile Arrow + Team and Name */}
        <div className="block md:hidden mb-4">
          <div className="flex items-center mb-2">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#FF0000] text-white px-4 py-1.5 rounded-full"
            >
              <FaArrowLeft className="text-white text-sm" />
              <span className="text-white font-urbanist text-base">UI</span>
            </a>
          </div>
          <h1 className="font-urbanist font-normal text-[40px] leading-[100%] text-red-600 mb-4 text-center md:text-left">
            {intern.name}
          </h1>
        </div>

        {/* Left Info (Desktop) */}
        <div className="hidden md:block max-w-xl mt-[100px]">
          {/* Arrow + Team + Name */}
          <div className="flex items-center mb-8">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#FF0000] text-white px-5 py-2 rounded-full"
            >
              <FaArrowLeft className="text-white text-sm" />
              <span className="text-white font-urbanist text-base">UI</span>
            </a>
            <span className="ml-2 text-[#FF0000] font-urbanist text-base">
              / {intern.name}
            </span>
          </div>

          <h1 className="font-urbanist font-normal text-[100px] leading-[100%] text-red-600">
            {intern.name.split(" ")[0]}<br />{intern.name.split(" ")[1]}.
          </h1>

          {/* About Yourself */}
          {intern.about_yourself && (
            <p className="text-gray-300 mt-6 text-base leading-[160%] w-[423px]">
              {intern.about_yourself}
            </p>
          )}

          {/* Desktop Socials */}
          <div className="flex space-x-[49px] mt-[48px] w-[360px] h-[80px] px-[22px] py-[21px] rounded-[32px] bg-white/20">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white w-[35px] h-[35px]" />
            </a>
            <a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer">
              <MdOutlineMail className="text-white w-[35px] h-[35px]" />
            </a>
            <a href={intern.git_link} target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white w-[35px] h-[35px]" />

          
            </a>
            <a href={intern.linkedin_link} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-white w-[35px] h-[35px]" />
            </a>
          </div>
        </div>

        {/* Right Image - responsive placement */}
        <div className="relative shrink-0 mt-4 md:mt-[218px]">
          <img
            src={intern.photo}
            alt={intern.name}
            className="w-full md:w-[583px] h-auto md:h-[583px] object-cover rounded-[32px]"
          />
          {intern.ai_avatar ? (
            <img
              src={intern.ai_avatar}
              alt="Memoji"
              className="hidden md:block w-[167px] h-[169px] object-cover rounded-[32px] absolute bottom-0 left-[calc(100%-83.5px)] md:left-[499.5px]"
            />
          ) : null}
        </div>

        {/* Mobile About Yourself & Socials */}
        <div className="block md:hidden mt-6">
          {intern.about_yourself && (
            <p className="text-gray-300 text-base leading-[160%] px-4">
              {intern.about_yourself}
            </p>
          )}
          <div className="flex justify-center space-x-6 mt-6 w-[80%] mx-auto py-4 rounded-[32px] bg-white/20">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white w-7 h-7" />
            </a>
            <a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer">
              <MdOutlineMail className="text-white w-7 h-7" />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white w-7 h-7" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-white w-7 h-7" />
            </a>
          </div>
        </div>
      </div>

      {/* Mentor Quote */}
      {intern.mentor_mantra && (
        <div className="mt-20">
          <h2 className="font-urbanist text-[32px] md:text-[48px] text-red-600">
            A word from the mentor...
          </h2>
          <div className="bg-white bg-opacity-10 rounded-[32px] px-6 py-6 mt-4 max-w-2xl">
            <p className="font-[AdobeClean] italic text-[20px] text-[#E91672]">
              “{intern.mentor_mantra}”
            </p>
            <div className="mt-4 text-[#FFF7E1] font-urbanist text-[16px]">
              {intern.mentor_name}
            </div>
          </div>
        </div>
      )}

      {/* Divider */}
      <div className="mt-[70px] border-t border-white border-opacity-30" />

      {/* Project Description */}
      {intern.about_project && (
        <div className="mt-16 mx-auto text-left max-w-3xl">
          <h3 className="font-urbanist text-[24px] md:text-[32px] text-[#FF0000] mb-2">
            Tell us about your project—what were the bugs, the breakthroughs, and the brain-fry moments?
          </h3>
          <p className="font-[Instrument Sans] text-[16px] text-gray-300 leading-[140%]">
            {intern.about_project}
          </p>
        </div>
      )}

      {/* Intern Moment */}
      {intern.about_adobe && (
        <div className="mt-16 mx-auto text-left max-w-3xl">
          <h3 className="font-urbanist text-[24px] md:text-[32px] text-[#FF0000] mb-2">
            Your most unforgettable intern moment—spill!
          </h3>
          <p className="font-[Instrument Sans] text-[16px] text-gray-300 leading-[140%]">
            {intern.about_adobe}
          </p>
        </div>
      )}
    </div>
  );
};

export default InternProfilePage;
