import React, { useState } from "react";

function Accordion({ title, answer }) {
  const [isopen, setIsopen] = useState(false);
  return (
    <div className="w-2/3 items-center bg-AccentColor02 my-2 py-2">
      <button
        onClick={() => setIsopen(!isopen)}
        className="flex justify-between w-full font-inter font-medium text-[22px] leading-[28px] text-black"
      >
      <div
        className={`grid  transition-all duration-300 ease-in-out ${
          isopen ? "text-PrimaryColor" : "text-black"
        }`}
      >
        <div className="">{title}</div>
      </div>
        {/* <span>{title}</span> */}
        {isopen ? (
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-3.5 h-3.5 text-PrimaryColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 12h14"
              />
            </svg>
          </span>
        ) : (
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-3.5 h-3.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </span>
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-500 ${
          isopen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-100"
        }`}
      >
        <div className="overflow-hidden text-AccordionExpand">{answer}</div>
      </div>
    </div>
  );
}

export default Accordion;
