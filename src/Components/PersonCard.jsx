const PersonCard = ({ name, image, bio, profileLink }) => (
  <div className="relative w-96 h-64 bg-white/10 rounded-3xl overflow-hidden">
    <div className="flex flex-row items-center justify-center h-full w-full relative">
      <img
        src={image ?? "/portal/default-profile.jpg"}
        alt={name}
        className="w-1/2 h-full object-cover flex-1"
      />

      <div className="w-1/2 flex-1 flex flex-col items-start justify-between h-full p-4">
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
