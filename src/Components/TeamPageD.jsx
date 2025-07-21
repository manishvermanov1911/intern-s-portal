import React from "react";
import testArrow from "../assets/testarrow.svg";

const TeamPageD = ({ team, teamMembers, timelineImage, teamDescription }) => {
  const members = teamMembers;

  const TeamCard = ({ name, image, bio, profileLink }) => (
    <div className="relative w-[365px] h-[273px] bg-white/10 rounded-[32px] overflow-hidden">
      {/* Left image */}
      <div className="absolute left-0 top-[0.5px] w-[182px] h-[279px]">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Name */}
      <h2 className="absolute left-[195px] top-[24px] w-[160px] text-[24px] leading-[110.58%] font-urbanist font-semibold text-[#FF0000] break-words whitespace-normal">
        {name}
      </h2>

      {/* Bio */}
      <p
        className="absolute w-[153px] h-[72px] text-[14px] leading-[18px] font-normal text-[#FFF7E1] font-instrument overflow-hidden line-clamp-4"
        style={{
          left: `calc(50% - 76.5px + 92px)`,
          top: `calc(50% - 36px - 14.5px)`,
        }}
      >
        {bio}
      </p>

      <a
        href={profileLink}
        className="absolute left-[241px] top-[209px] w-[108px] h-[40px] bg-[rgba(255,0,0,0.16)] rounded-[20px] flex justify-center items-center px-[15px] py-[10px] no-underline"
      >
        <span className="w-[108px] h-[20px] text-[14px] leading-[20px]  text-[#FFF7E1] font-[Adobe_Clean] font-normal text-center">
          View Profile
        </span>
      </a>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto min-h-screen bg-black flex flex-col items-center px-4 py-8">
      {/* Breadcrumb */}
      <div className="w-full max-w-[1160px] flex items-center gap-[12px] mt-[172px] mb-8">
        {/* Red Pill */}
        <a
          href="/teams"
          className="w-[114px] h-[40px] bg-[#FF0000] hover:bg-[#cc0000] rounded-full flex items-center justify-center gap-[10px] p-[10px] no-underline"
        >
          <img src={testArrow} alt="Arrow" />
          <span className="text-white text-[16px] leading-[20px] font-normal">
            Teams
          </span>
        </a>

        {/* Breadcrumb text */}
        <div className="h-[24px] flex items-center text-[20px] leading-[20px] font-normal text-[#FFF7E1]">
          <span className="mr-1">/</span>
          <span className="text-red-500">{team}</span>
        </div>
      </div>

      {/* Team Title */}
      <div className="hidden md:block w-[697px] h-[120px] text-[100px] leading-[120px] text-center text-[#FF0000] font-urbanist font-normal mb-6">
        {team}
      </div>

      <div className="md:hidden w-[223px] h-[49px] text-white text-[40px] leading-[49px] text-center font-normal font-[Instrument_Sans] mb-6">
        {team} Members
      </div>

      {/* Subtext */}
      <div className="w-full max-w-[840px] text-[18px] leading-[22px] text-center text-[#FFF7E1] font-urbanist font-normal mb-8">
        {teamDescription}
      </div>

      <div className="w-full max-w-[904px] text-[48px] leading-[110.58%] text-center text-white font-urbanist mb-4">
        Members
      </div>

      <div className="w-full max-w-[840px] text-center font-normal font-urbanist text-[14px] leading-[17px] text-white md:text-[16px] md:leading-[19px] md:text-[#FFF7E1] mb-12">
        View profiles and bios! Learn more about what we do as{" "}
        <span className="font-bold text-red-600">#AdobeInterns!</span>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-[32px] items-center mb-16">
        <div className="flex gap-[32px] flex-wrap justify-center">
          {members.slice(0, 3).map((member, i) => (
            <TeamCard
              key={i}
              name={member.name}
              image={member.photo}
              bio={member.about_yourself}
              profileLink={`/intern/${member.employee_id - 1}`}
            />
          ))}
        </div>
        <div className="flex gap-[32px] flex-wrap justify-center">
          {members.slice(3, 6).map((member, i) => (
            <TeamCard
              key={i + 3}
              name={member.name}
              image={member.photo}
              bio={member.about_yourself}
              profileLink={`/intern/${member.employee_id - 1}`}
            />
          ))}
        </div>
      </div>

      {/* Timeline Title */}
      <h2 className="w-[500px] h-[58px] text-center text-[48px] leading-[58px] font-urbanist font-normal text-white mb-8">
        Our Internship Timeline
      </h2>

      {/* Timeline Component */}
      <img
        src={timelineImage}
        alt={`${team} Timeline`}
        className="w-full mt-4"
      />
    </div>
  );
};

export default TeamPageD;
