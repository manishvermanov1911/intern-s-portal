import React from "react";
import FaqDropdown from "../Components/FaqDropdown";
import doImage from "../assets/test_do.svg";
import dontImage from "../assets/test_dont.svg";
const items = [
  {
    label: "Do",
    text: "Ask for feedback regularly — Use it to continuously improve during your internship.",
  },
  {
    label: "Don't",
    text: "Don't experiment with the pantry steamer — If you're unsure, ask someone for help instead.",
  },
  {
    label: "Do",
    text: "Acknowledge the small tasks your mentor or SPOC asks you to do — it reflects attentiveness and respect.",
  },
  {
    label: "Don't",
    text: "Don't miss any office celebrations — They're a great way to bond with your team and be part of the culture.",
  },
  {
    label: "Do",
    text: "Attend meetings on time — Punctuality is a key part of professional behavior.",
  },
  {
    label: "Don't",
    text: "Don't skip meetings — Whether it's a team sync or an intern gathering, every meeting adds value to your experience.",
  },
  {
    label: "Do",
    text: "Keep in regular contact with your mentor — Stay aligned on expectations and progress.",
  },
  {
    label: "Don't",
    text: "Don't miss any meetings with Adobe's CEO — These are rare opportunities to learn from leadership.",
  },
  {
    label: "Do",
    text: "Finalize your presentation project as early as possible — This avoids last-minute stress and gives time for feedback.",
  },
  {
    label: "Don't",
    text: "Don't hesitate to ask questions — No question is too small; seeking clarity shows you care.",
  },
  {
    label: "Do",
    text: "Install Outlook, Teams, and Slack on your phone — Stay updated, connected, and responsive.",
  },
  {
    label: "Don't",
    text: "Don't address anyone as 'sir' or 'ma'am' — Adobe follows a first-name culture, regardless of position.",
  },
  {
    label: "Do",
    text: "Make full use of the office facilities — Utilize the gym, outdoor courts, cricket nets, and more. Networking often happens after work hours, so don't hesitate to stay back occasionally.",
  },
  {
    label: "Don't",
    text: "Don't forget to carry an umbrella — Weather can be unpredictable, and staying dry keeps you comfortable and presentable.",
  },
  {
    label: "Do",
    text: "While playing sports, return equipment to its place and inform the facilities manager if anything gets damaged.",
  },
  {
    label: "Don't",
    text: "Don't depend on Bengaluru traffic — Always plan your commute in advance to avoid delays.",
  },
  {
    label: "Do",
    text: "Greet your mentor in the morning — A simple 'Good Morning' can help build a positive rapport.",
  },
  {
    label: "Don't",
    text: "Don't forget to get your Creative Cloud subscription using your personal email ID — not your Adobe one — to retain access even after your internship ends.",
  },
  {
    label: "Do",
    text: "Ensure that issued laptops are in working condition — Check ports and battery before accepting the device.",
  },
];

const CardBase = ({ label, text, bgImage }) => {
  const isDont = label === "Don't";

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <img
        src={bgImage}
        alt={label}
        className="object-contain absolute inset-0 w-full h-full"
      />
      <div className="relative w-full h-[400px] flex items-center justify-center">
        {/* Pill Label (Frame 13 style - different for Do / Don't) */}
        <div
          className={`absolute flex justify-center items-center px-5 py-6 gap-[10px] font-title text-[50px]`}
          style={{
            width: isDont ? "158px" : "108px",
            height: "106px",
            left: isDont
              ? "calc(50% - 158px/2 - 95px)"
              : "calc(50% - 108px/2 - 122px)",
            top: isDont ? "24px" : "20px",
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "60px",
            color: isDont ? "#FF0000" : "#FFF7E1",
          }}
        >
          {label}.
        </div>
        {/* Description */}
        <p className="absolute font-body text-base md:text-lg text-[#FFF7E1] mt-20 px-4 text-center max-w-[300px]">
          {text}
        </p>
      </div>
    </div>
  );
};

const DoCard = ({ label = "Do", text }) => (
  <CardBase label={label} text={text} bgImage={doImage} />
);

const DontCard = ({ label = "Don't", text }) => (
  <CardBase label={label} text={text} bgImage={dontImage} />
);

const SurvivalKit = () => (
  <div className="w-full flex flex-col items-center px-4 mt-8">
    <h2 className="text-3xl md:text-5xl text-center font-title text-[#FFF7E1] mb-4 font-title">
      Survival Kit
    </h2>
    <p className="text-sm md:text-lg text-center font-body text-[#FFF7E1] mb-8">
      A compilation of the wisdom of interns past.
      <br></br>Don't make the same mistakes we did. Or do… but read this first.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center w-full">
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
    title: "Technical & Device Issues",
    questions: [
      {
        question: "Should I use my Adobe email to create a GitHub account?",
        answer:
          "No, use your personal email ID to avoid losing access to your repositories after your internship.",
      },
      {
        question: "What should I check before accepting the laptop?",
        answer:
          "Ensure that your laptop, USB ports, and battery are working properly before issuing or accepting it.",
      },
      {
        question:
          "What should I do if I can't access internal tools or portals?",
        answer: "Follow up with your mentor to get the necessary permissions.",
      },
      {
        question: "How can I connect my personal device to the guest Wi-Fi?",
        answer:
          "Follow the specific onboarding steps shared by the IT/HR team.",
      },
      {
        question: "Where can I get help for technical issues with my laptop?",
        answer:
          "Visit the Tech Café for hardware/software support. For example, one intern had their laptop replaced with help from a staff member named Sooraj.",
      },
    ],
  },
  {
    title: "Workplace Navigation & Logistics",
    questions: [
      {
        question: "How can I find meeting rooms or desk spaces?",
        answer: "Ask colleagues or refer to the office map and room locators.",
      },
      {
        question: "Are interns eligible for cab services?",
        answer:
          "Interns are not eligible for regular cab services. However, if you're asked to stay beyond 8 PM, you can request a cab by emailing your manager for approval.",
      },
      {
        question: "What are the typical working hours at Adobe?",
        answer:
          "Adobe doesn’t have fixed working hours, but most teams follow 10:00 AM – 6:00 PM as a guideline.",
      },
      {
        question: "Is there a dress code at Adobe?",
        answer:
          "There is no formal dress code. You can wear smart casuals or anything comfortable and decent.",
      },
    ],
  },
  {
    title: "Communication & Culture",
    questions: [
      {
        question: "How should I address seniors at Adobe?",
        answer:
          "It’s standard to call everyone by their first name — no 'sir' or 'ma’am', regardless of seniority.",
      },
      {
        question: "What if I'm unclear about my initial tasks?",
        answer:
          "It's normal to feel confused at first. Understand your responsibilities by working through them, and ask teammates for help — they’ll gladly assist you.",
      },
    ],
  },
];

const FaqPage = () => (
  <div className="max-w-6xl mx-auto px-4 text-center mt-32 flex flex-col items-center">
    <h1 className="text-5xl md:text-7xl mb-3 text-[#FFF7E1] font-title">
      FAQs
    </h1>
    <p className="text-base md:text-lg text-center font-body text-[#FFF7E1] mb-8">
      For everything you were too afraid to ask in the group chat.
    </p>

    <div className="w-full flex flex-col gap-8 items-center">
      {faqData.map((cat, idx) => (
        <FaqDropdown key={idx} title={cat.title} questions={cat.questions} />
      ))}

      <SurvivalKit />
    </div>
  </div>
);

export default FaqPage;
