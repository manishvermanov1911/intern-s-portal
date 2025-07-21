import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import FaqQuestion from "./FaqQuestion";

const FaqDropdown = ({ title = "Category", questions = [] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-white/10 rounded-[32px] text-left">
      {/* Category Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-[24px] md:px-[44px] py-[11px] h-[61px]"
      >
        <span className="font-body text-lg md:text-2xl text-white">
          {title}
        </span>
        {open ? (
          <FaChevronUp className="text-white w-[24px] h-[24px] md:w-[48px] md:h-[48px]" />
        ) : (
          <FaChevronDown className="text-white w-[24px] h-[24px] md:w-[48px] md:h-[48px]" />
        )}
      </button>

      {/* Show Questions only if category is open */}
      {open && (
        <div className="flex flex-col gap-4 px-[24px] md:px-[44px] pb-[22px] pt-[8px]">
          {questions.map((q, idx) => (
            <FaqQuestion
              key={idx}
              question={q.question}
              answer={q.answer}
              categoryOpen={open} // pass info to style chevron
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FaqDropdown;
