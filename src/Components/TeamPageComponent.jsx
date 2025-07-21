import React from "react";
import testArrow from "../assets/testarrow.svg";
import PersonCard from "./PersonCard";

const TeamPageComponent = ({
  team,
  teamMembers,
  timelineImage,
  teamDescription,
}) => {
  const members = teamMembers;

  return (
    <div className="min-w-screen min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto min-h-screen flex flex-col items-center px-4 py-8">
        {/* Team Title */}
        <div className="relative text-5xl md:text-7xl text-center text-[#FF0000] font-urbanist font-normal mt-32 mb-4 w-full max-w-6xl">
          {team}

          {/* Breadcrumb */}
          <div className="absolute left-0 -top-1/2 flex items-center gap-2">
            {/* Red Pill */}
            <a
              href="/teams"
              className="w-24 h-10 bg-[#FF0000] hover:bg-[#cc0000] rounded-3xl flex items-center justify-center gap-2 transition"
            >
              <img src={testArrow} alt="<" />
              <span className="font-body text-white text-sm">Teams</span>
            </a>
            {/* Breadcrumb text */}
            <span className="text-lg font-base text-[#FFF7E1]">/</span>
            <span className="text-[#FF0000] text-lg">{team}</span>
          </div>
        </div>
        <div className="w-full text-lg text-center text-[#FFF7E1] font-urbanist font-normal mb-8">
          {teamDescription}
        </div>

        <div className="text-3xl md:text-5xl text-center text-white font-urbanist mb-4">
          Members
        </div>

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
              profileLink={`/intern/${member.employee_id - 1}`}
            />
          ))}
        </div>

        {/* Timeline Title */}
        <h2 className="text-center text-3xl md:text-5xl font-urbanist font-normal text-white mb-8">
          Our Internship Timeline
        </h2>

        {/* Timeline Component */}
        <img
          src={timelineImage}
          alt={`${team} Timeline`}
          className="w-full mb-8 h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default TeamPageComponent;
