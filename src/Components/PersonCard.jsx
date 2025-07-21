const PersonCard = ({ name, image, bio, profileLink }) => (
  <div className="relative w-96 h-64 bg-white/10 rounded-3xl overflow-hidden">
    <div className="flex flex-row items-center justify-center h-full relative">
      <img
        src={image ?? "/default-profile.jpg"}
        alt={name}
        className="w-full h-full object-cover flex-1"
      />

      <div className="flex-1 flex flex-col items-start justify-between h-full p-4">
        <h2 className="text-2xl font-title font-semibold text-[#FF0000] break-words whitespace-normal">
          {name}
        </h2>
        <p className="text-sm font-normal font-body text-[#FFF7E1] overflow-hidden line-clamp-4">
          {bio}
        </p>

        <a
          href={profileLink}
          className="w-32 h-12 rounded-3xl bg-[#FF0000]/20 flex justify-center items-center no-underline text-[#FFF7E1] font-body text-sm hover:bg-[#FF0000]/30 transition-colors duration-200"
        >
          View Profile
        </a>
      </div>
    </div>
  </div>
);

export default PersonCard;

// <div key={index} className="w-[48%]">
//   <div className="relative w-full h-[231px] bg-white/10 rounded-[24px] overflow-hidden">
//     {/* Image */}
//     <div
//       className="w-full h-[124px] bg-cover bg-center rounded-t-[24px]"
//       style={{ backgroundImage: `url(${member.image})` }}
//     ></div>

//     {/* Name + Bio */}
//     <div className="px-2 pt-2">
//       <div
//         className="text-[20px] leading-[24px]"
//         style={{ fontFamily: "Urbanist" }}
//       >
//         {member.name}
//       </div>
//       <div
//         className="text-[12px] leading-[14px] mt-1"
//         style={{ fontFamily: "Urbanist" }}
//       >
//         {member.bio}
//       </div>
//     </div>

//     {/* Button */}
//     <div className="absolute bottom-3 right-3 bg-[rgba(235,16,0,0.4)] text-[12px] leading-[14px] px-3 py-1 rounded-[24px]">
//       View Profile
//     </div>
//   </div>
// </div>
