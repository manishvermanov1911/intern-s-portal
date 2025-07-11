import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import FaqQuestion from "./FaqQuestion";

const FaqDropdown = ({ title = "Category", questions = [] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-white/10 rounded-[32px]">
      {/* Category Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-[44px] py-[11px] h-[61px]"
      >
        <span className="font-instrument text-[32px] leading-[39px] text-white">
          {title}
        </span>
        {open ? (
          <FaChevronUp className="text-white" />
        ) : (
          <FaChevronDown className="text-white" />
        )}
      </button>

      {/* Show Questions only if category is open */}
      {open && (
        <div className="flex flex-col gap-4 px-[44px] pb-[22px] pt-[11px]">
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
