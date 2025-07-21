const PersonCard = ({ name, image, bio, profileLink }) => (
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

export default PersonCard;
