import React from "react";
import FaqDropdown from "../Components/FaqDropdown";
import doImage from '../assets/do.png'
import dontImage from '../assets/dont.png'

const items = [
  { label: "Do", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quaerat totam id et, necessitatibus neque modi quibusdam facilis mollitia harum? Eveniet quaerat libero harum beatae. Cupiditate odit deserunt nulla adipisci." },
  { label: "Don't", text: "Don’t share personal info with strangers." },
  { label: "Do", text: "Check-in with your mentor weekly." },
    { label: "Don't", text: "Don't skip daily standups." },
   { label: "Do", text: "Celebrate small wins — they matter!" },

  { label: "Do", text: "Document your work regularly." },
 
  { label: "Do", text: "Be kind and ask questions!" },
   { label: "Don't", text: "Don't hoard information, share it." },
  { label: "Don't", text: "Don’t pretend to know everything. Asking questions makes you look smart, not clueless." },
 
];

const CardBase = ({ label, text, bgImage }) => {
  const isDont = label === "Don't";

  return (
    <div
      className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] h-[400px] bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Pill Label (Frame 13 style - different for Do / Don't) */}
      <div
        className="absolute flex justify-center items-center px-5 py-6 gap-[10px]"
        style={{
          width: isDont ? "158px" : "108px",
          height: "106px",
          left: isDont
            ? "calc(50% - 158px/2 - 95px)"
            : "calc(50% - 108px/2 - 122px)",
          top: isDont ? "24px" : "20px",
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "60px",
          fontFamily: "Urbanist",
          fontSize: "32px",
          color: isDont ? "#FF0000" : "#FFF7E1",
        }}
      >
        {label}
      </div>

      {/* Description */}
      <p className="absolute top-[177px] left-[59px] w-[295px] text-left text-[#FFF7E1] font-['Instrument_Sans'] text-[16px] sm:text-[18px] leading-[22px] z-30">
        {text}
      </p>
    </div>
  );
};





const DoCard = ({ label = "Do", text }) => (
  <CardBase label={label} text={text} bgImage={doImage} />
);

const DontCard = ({ label = "Don't", text }) => (
  <CardBase label={label} text={text} bgImage={dontImage} />
);



const Frame128Wrapper = () => (
  <div className="w-full flex flex-col items-center px-4 mt-24">
    {/* Subheading ABOVE heading */}
  

    <h2 className="text-[32px] sm:text-[36px] md:text-[48px] leading-[44px] md:leading-[58px] text-center font-['Urbanist'] text-[#FFF7E1] mb-2">
      Survival Kit
    </h2>
  <p className="text-[16px] sm:text-[18px] leading-[22px] text-center font-['Instrument_Sans'] text-[#FFF7E1] max-w-[840px] mb-8">
      A compilation of the wisdom of interns past. 
      <br>
      </br>Don’t make the same mistakes we did. Or do… but read this first.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center w-full max-w-[1240px]">
      {items.map((item, index) =>
        item.label === "Don't" ? (
          <DontCard key={index} text={item.text} />
        ) : (
          <DoCard key={index} text={item.text} />
        )
      )}
    </div>
  </div>
);

const faqData = [
  {
    title: "Cateogy 1",
    questions: [
      { question: "What is this platform?", answer: "It's a mentorship-based learning tool for interns." },
      { question: "Can I access it after internship?", answer: "Yes, but with limited features." },
    ],
  },
  {
    title: "Category 1",
    questions: [
      { question: "How to contact support?", answer: "Ping the Slack channel #help or mail us at support@example.com." },
    ],
  },
  // add more...
];

const FaqPage = () => (
  <div className="w-full bg-black text-[#FFF7E1] min-h-screen flex flex-col items-center px-4 pb-24">
    <h1 className="text-[60px] md:text-[100px] text-center font-urbanist font-normal mt-32 mb-6">FAQs</h1>
    <p className="text-[16px] leading-[20px] text-center font-instrument text-[#FFF7E1] max-w-[840px] mb-12">
  For everything you were too afraid to ask in the group chat.
</p>


    <div className="w-full max-w-[1193px] flex flex-col gap-[28px] items-center">
      {faqData.map((cat, idx) => (
        <FaqDropdown key={idx} title={cat.title} questions={cat.questions} />
      ))}

      <Frame128Wrapper />
    </div>
  </div>
);

export default FaqPage;
