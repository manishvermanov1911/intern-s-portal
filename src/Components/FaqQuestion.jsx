import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FaqQuestion = ({ question, answer, categoryOpen }) => {
  const [open, setOpen] = useState(false);

  // Question background changes only when it's open
  const questionBoxBg = open
    ? "bg-[rgba(255,0,98,0.2)]"
    : "bg-[rgba(255,247,225,0.06)]";

  // Chevron color depends on category state
  const chevronColor = categoryOpen ? "#FF0062" : "#FFFFFF";

  return (
    // outer one
    <div className="w-full bg-[rgba(255,247,225,0.06)] rounded-[16px]">
      {/* Question Block */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex justify-between items-center px-[14px] py-[10px] w-full rounded-[16px] ${questionBoxBg} transition-colors duration-300`}
      >
        <span className="font-body text-[16px] leading-[20px] text-white text-left w-[90%]">
          {question}
        </span>
        {open ? (
          <FaChevronUp
            className="w-[38px] h-[36px]"
            style={{ color: chevronColor }}
          />
        ) : (
          <FaChevronDown
            className="w-[38px] h-[36px]"
            style={{ color: chevronColor }}
          />
        )}
      </button>

      {/* Answer attached below question */}
      {open && (
        <div className="px-[14px] pt-4 pb-5  rounded-b-[16px] font-body text-[16px] leading-[20px] text-white transition-all duration-300">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FaqQuestion;
