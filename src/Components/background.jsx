import bgImage from "../assets/background.svg";

const Background = () => {
  return (
    <div className="absolute inset-0 z-[-1]">
      <img
        src={bgImage}
        alt="Background"
        className="w-full object-contain"
      />
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
};

export default Background;
