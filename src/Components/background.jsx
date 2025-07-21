import bgImage from "../assets/background.jpg";

const Background = () => {
  return (
    <div className="absolute inset-0 z-[-1] h-screen">
      <img
        src={bgImage}
        alt="Background"
        className="w-full h-full object-fill object-center"
      />
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
};

export default Background;
