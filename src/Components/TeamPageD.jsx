import React from 'react';
import JourneyTimeline from './JourneyTimeline';
import teamData from '../Data/team';

const TeamPageD = ({ team, timelineData }) => {
  const members = teamData[team]?.teamMembers || [];

  const TeamCard = ({ name, image, bio }) => (
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
        className="absolute w-[153px] h-[72px] text-[14px] leading-[18px] font-normal text-[#FFF7E1] font-adobe"
        style={{
          left: `calc(50% - 76.5px + 92px)`,
          top: `calc(50% - 36px - 14.5px)`,
        }}
      >
        {bio}
      </p>

      {/* View Profile Button */}
      <div className="absolute left-[241px] top-[209px] w-[108px] h-[40px] bg-[rgba(255,0,0,0.16)] rounded-[20px] flex justify-center items-center px-[15px] py-[10px]">
        <span className="w-[108px] h-[20px] text-[14px] leading-[20px]  text-[#FFF7E1] font-[Adobe_Clean] font-normal text-center">
          View Profile
        </span>
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-black">
      {/* Page content here */}
      {/* Breadcrumb */}
      <div className="absolute left-[60px] top-[180px] w-[114px] h-[40px] bg-[#FF0000] rounded-full flex items-center justify-center gap-[20px] p-[10px]">
        <div className="w-[22px] h-0 border-t-2 border-white rotate-180" />
        <span className="text-white text-[16px] leading-[20px] font-normal" >
          Teams
        </span>
      </div>
<div
  className="absolute w-[115px] h-[24px] top-[190px] flex items-center text-[20px] leading-[20px] font-normal text-[#FFF7E1]"
  style={{ left: 'calc(50% - 115px/2 - 400.5px)' }}
>
  <span className="mr-1">/</span>
  <span className='text-red-500'>{team}</span>
</div>


      {/* Team Title */}
      <div className="hidden md:block absolute left-[292px] top-[220px] w-[697px] h-[120px] text-[100px] leading-[120px] text-center text-[#FF0000] font-urbanist font-normal">
        {team}
      </div>
      <div className="md:hidden absolute w-[223px] h-[49px] left-1/2 -translate-x-1/2 top-[144px] text-white text-[40px] leading-[49px] text-center font-normal font-[Instrument_Sans]">
        {team} Members
      </div>

      {/* Subtext */}
      <div className="absolute w-[840px] h-[22px] left-1/2 top-[368px] -translate-x-1/2 text-[18px] leading-[22px] text-center text-[#FFF7E1] font-urbanist font-normal">
        We progress by Reacting to demands, beautifully.
      </div>

      <div className="absolute w-[904px] h-[53px] left-1/2 -translate-x-[calc(904px/2+8px)] top-[465px] text-[48px] leading-[110.58%] text-center text-white font-urbanist">
        Members
      </div>

      <div className="absolute left-1/2 top-[217px] -translate-x-1/2 w-[400px] h-[34px] text-center 
             font-normal font-urbanist text-[14px] leading-[17px] text-white 
             md:top-[534px] md:w-[840px] md:h-[19px] md:text-[16px] md:leading-[19px] md:text-[#FFF7E1]">
        View profiles and bios! Learn more about what we do as{' '}
        <span className="font-bold text-red-600">#AdobeInterns!</span>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-[32px] items-center absolute top-[613px] left-1/2 -translate-x-1/2">
        <div className="flex gap-[32px]">
          {members.slice(0, 3).map((member, i) => (
            <TeamCard key={i} name={member.name} image={member.image} bio={member.bio} />
          ))}
        </div>
        <div className="flex gap-[32px]">
          {members.slice(3, 6).map((member, i) => (
            <TeamCard key={i + 3} name={member.name} image={member.image} bio={member.bio} />
          ))}
        </div>
      </div>

      {/* Timeline Title */}
      <h2 className="absolute top-[1319px] left-1/2 -translate-x-[241.5px] w-[500px] h-[58px] text-center text-[48px] leading-[58px] font-urbanist font-normal text-white">
        Our Internship Timeline
      </h2>

      {/* Timeline Component */}
      <JourneyTimeline timelineData={timelineData} />
    </div>
  );
};

export default TeamPageD;
