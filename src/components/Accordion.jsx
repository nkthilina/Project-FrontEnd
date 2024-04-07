import React, { useState } from "react";

function Accordion({ title, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-center">
      <div className="bg-AccordionBg my-2 p-5">
        <div className="p- gap-10">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex justify-between w-full font-inter font-medium text-[22px] leading-[28px] text-black"
          >
            <div
              className={`grid  transition-all duration-300 ease-in-out ${
                isOpen ? "text-PrimaryColor" : "text-black"
              }`}
            >
              <div className="">{title}</div>
            </div>
            {/* <span>{title}</span> */}
            {isOpen ? (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-3.5 h-3.5 text-PrimaryColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
              </span>
            ) : (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-3.5 h-3.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </span>
            )}
          </button>
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-500 ${
              isOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-100"
            }`}
          >
            <div className="overflow-hidden text-AccordionExpand">{answer}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
