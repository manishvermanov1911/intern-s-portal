import React from "react";
import { FaChevronLeft } from "react-icons/fa";

const TeamPageM = ({ team, teamMembers, timelineImage }) => {
  {
    /* Timeline */
  }

  return (
    <div className="w-full bg-black text-white">
      {/* Header */}
      <div className="relative pt-20 px-4 py-6 flex items-center justify-between">
        <FaChevronLeft className="text-white text-xl" />
        <h1 className="text-[40px] leading-[49px] font-normal">
          {team?.toUpperCase()} Members
        </h1>
        <div className="w-6" /> {/* spacing placeholder */}
      </div>

      {/* Subtext */}
      <p
        className="text-center px-4 text-[14px] leading-[17px] font-normal"
        style={{ fontFamily: "Urbanist" }}
      >
        View profiles and bios! Learn more about what we do as #AdobeInterns!
      </p>

      {/* Member Cards */}
      <div className="mt-6 px-[20px] flex flex-wrap gap-y-6 justify-between">
        {teamMembers.map((member, index) => (
          <div key={index} className="w-[48%]">
            <div className="relative w-full h-[231px] bg-white/10 rounded-[24px] overflow-hidden">
              {/* Image */}
              <div
                className="w-full h-[124px] bg-cover bg-center rounded-t-[24px]"
                style={{ backgroundImage: `url(${member.image})` }}
              ></div>

              {/* Name + Bio */}
              <div className="px-2 pt-2">
                <div
                  className="text-[20px] leading-[24px]"
                  style={{ fontFamily: "Urbanist" }}
                >
                  {member.name}
                </div>
                <div
                  className="text-[12px] leading-[14px] mt-1"
                  style={{ fontFamily: "Urbanist" }}
                >
                  {member.bio}
                </div>
              </div>

              {/* Button */}
              <div className="absolute bottom-3 right-3 bg-[rgba(235,16,0,0.4)] text-[12px] leading-[14px] px-3 py-1 rounded-[24px]">
                View Profile
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Our Journey Section */}
      <div className="mt-16 text-center px-4">
        <h2
          className="text-[20px] leading-[24px] font-normal"
          style={{ fontFamily: "Instrument Sans" }}
        >
          Our Journey
        </h2>
        <p
          className="text-[14px] leading-[17px] mt-2 font-normal"
          style={{ fontFamily: "Urbanist" }}
        >
          View profiles and bios! Learn more about what we do as #AdobeInterns!
        </p>
      </div>

      <img
        src={timelineImage}
        alt={`${team} Timeline`}
        className="w-full mt-4"
      />
    </div>
  );
};

export default TeamPageM;
