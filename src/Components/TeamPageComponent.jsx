import React from "react";
import testArrow from "../assets/testarrow.svg";
import PersonCard from "./PersonCard";
import useIsMobile from "./useIsMobile";

const TeamPageComponent = ({
  team,
  teamMembers,
  timelineImage,
  teamMobileImage,
  teamDescription,
}) => {
  const members = teamMembers;

  const isMobile = useIsMobile();

  return (
    <div className="min-w-screen min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto min-h-screen flex flex-col items-center px-4 py-8">
        {/* Team Title */}
        {isMobile && (
          <div className="mt-12 mb-8 self-start">
            <a
              href="#/teams"
              className="w-24 h-10 rounded-3xl flex items-center justify-start gap-2 transition"
            >
              <img src={testArrow} alt="<" />
              <span className="font-body text-white text-sm">Teams</span>
            </a>
          </div>
        )}
        <div className="relative text-5xl md:text-7xl text-center text-white md:text-[#FF0000] font-title font-normal mt-0 md:mt-32 mb-4 w-full max-w-6xl">
          {!isMobile ? team : team + " Members"}

          {/* Breadcrumb */}
          {!isMobile && (
            <div className="absolute left-0 -top-1/2 flex items-center gap-2">
              {/* Red Pill */}
              <a
                href="#/teams"
                className="w-24 h-10 bg-[#FF0000] hover:bg-[#cc0000] rounded-3xl flex items-center justify-center gap-2 transition"
              >
                <img src={testArrow} alt="<" />
                <span className="font-body text-white text-sm">Teams</span>
              </a>
              {/* Breadcrumb text */}
              <span className="text-lg font-base text-[#FFF7E1]">/</span>
              <span className="text-[#FF0000] text-lg">{team}</span>
            </div>
          )}
        </div>

        <div className="w-full text-lg text-center text-[#FFF7E1] font-title font-normal mb-8">
          {teamDescription}
        </div>

        {!isMobile && (
          <div className="text-3xl md:text-5xl text-center text-white font-title mb-4">
            Members
          </div>
        )}

        <div className="text-center font-body text-sm text-white md:text-base mb-8">
          View profiles and bios! Learn more about what we do as{" "}
          <span className="font-bold text-[#FF0000]">#AdobeInterns!</span>
        </div>

        {/* Cards */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-6 mb-8">
          {members.map((member, i) => (
            <PersonCard
              key={i}
              name={member.name}
              image={member.photo}
              bio={member.about_yourself}
              profileLink={`#/intern/${member.employee_id - 1}`}
            />
          ))}
        </div>

        {/* Timeline Title */}
        <h2 className="text-center text-3xl md:text-5xl font-title font-normal text-white mb-8">
          Our Internship Timeline
        </h2>

        {!isMobile ? (
          <img
            src={timelineImage}
            alt={`${team} Timeline`}
            className="w-full mb-8 h-auto object-contain"
          />
        ) : (
          <img
            src={teamMobileImage}
            alt={`${team} Timeline`}
            className="w-full mb-8 h-auto object-contain"
          />
        )}
      </div>
    </div>
  );
};

export default TeamPageComponent;
