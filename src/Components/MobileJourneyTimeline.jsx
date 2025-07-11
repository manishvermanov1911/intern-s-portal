import React from 'react';



const RedDotWithLine = ({ side }) => {
  if (side === 'right') {
    // Dot on the left (original SVG)
    return (
      <div className="self-start ml-[50%]">
        <svg width="170" height="11" viewBox="0 0 170 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.666667 5.5C0.666667 8.44552 3.05448 10.8333 6 10.8333C8.94552 10.8333 11.3333 8.44552 11.3333 5.5C11.3333 2.55448 8.94552 0.166667 6 0.166667C3.05448 0.166667 0.666667 2.55448 0.666667 5.5ZM6 5.5V6.5H170V5.5V4.5H6V5.5Z"
            fill="#EB1000"
          />
        </svg>
      </div>
    );
  } else {
    // Dot on the right (new SVG)
    return (
      <div className="self-end mr-[50%]">
        <svg width="170" height="12" viewBox="0 0 170 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M158.667 6C158.667 8.94552 161.054 11.3333 164 11.3333C166.946 11.3333 169.333 8.94552 169.333 6C169.333 3.05448 166.946 0.666667 164 0.666667C161.054 0.666667 158.667 3.05448 158.667 6ZM0 6L0 7H164V6V5H0L0 6Z"
            fill="#EB1000"
          />
        </svg>
      </div>
    );
  }
};


const MobileJourneyTimeline = ({ timelineItems }) => {

  return (
    <div className="relative w-full bg-black pt-[100px] pb-[50px]">
      <div className="relative w-full max-w-[600px] mx-auto px-4">
        {/* Central vertical line */}
        <div className="absolute left-1/2 -translate-x-[1.5px] top-0 h-full w-[3px] bg-[#EB1000] z-0" />

        {timelineItems.map((item, index) => {
          const isRight = item.side === 'right';
          return (
            <div key={index} className="relative z-10 flex flex-col items-center mb-[100px]">
              {/* Red Dot + Horizontal Line */}
              <RedDotWithLine side={item.side} />

              {/* Text block */}
              <div
                className={`w-[148px] p-2 mt-2 ${
                  isRight ? 'self-start text-left ml-[50%]' : 'self-end text-right mr-[50%]'
                }`}
              >
                <div
                  className="text-[14px] leading-[17px] font-bold text-[#FF0062]"
                  style={{ fontFamily: 'Urbanist' }}
                >
                  {item.week}
                </div>
                <div
                  className="mt-1 text-[11px] leading-[13px] text-[#FFF7E1]"
                  style={{ fontFamily: 'Instrument Sans' }}
                >
                  {item.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileJourneyTimeline;
