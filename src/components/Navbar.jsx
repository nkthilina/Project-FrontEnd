// import React, { useState } from "react";
// import Logo from '../assets/White Logo.png'

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="flex justify-between items-center w-full pr-4  h-[77px] text-gray-700 bg-blue-200">
//       <div></div>
//       <img src={Logo} className="h-[25px] w-[238.89px] items-start mr-4" alt="" />
//       {/* <h1 className="w-full text-3xl">Navbar</h1> */}
//       <ul className="hidden md:flex uppercase  gap-7">
//         <li className="p-4">Services</li>
//         <li className="p-4 whitespace-nowrap">About Us</li>
//         <li className="p-4 whitespace-nowrap">Contact Us</li>
//         <li className="p-4">Careers</li>
//       </ul>
//       <div onClick={toggleMenu} className="block md:hidden">
//         {isMenuOpen ? (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="1.5"
//             stroke="currentColor"
//             class="w-6 h-6"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M6 18 18 6M6 6l12 12"
//             />
//           </svg>
//         ) : (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="1.5"
//             stroke="currentColor"
//             class="w-6 h-6"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//             />
//           </svg>
//         )}

//         <div
//           className={
//             isMenuOpen
//               ? "fixed left-0 top-0 w-[60%] h-full border-r border-gray-300 bg-gray-400 ease-in-out duration-500"
//               : "fixed left-[-100%]"
//           }
//         >

//           <h1 className="w-full text-3xl m-4 pt-4">Navbar</h1>
//           <ul className="p-24 uppercase">
//             <li className="p-4 ">Services</li>
//             <li className="p-4 whitespace-nowrap">About Us</li>
//             <li className="p-4 whitespace-nowrap">Contact Us</li>
//             <li className="p-4 ">Careers</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import Logo from "../assets/White Logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center w-full pr-4 h-20 text-gray-700 bg-PrimaryColor ">
      <div className="flex items-center">
        <img src={Logo} className="h-6 w-60 -mt-2 ml-8 xl:ml-24" alt="" />
      </div>
      <ul className="hidden md:flex uppercase gap-7 text-white mx-20">
        <li className="xl:p-4">Services</li>
        <li className="xl:p-4 whitespace-nowrap">About Us</li>
        <li className="xl:p-4 whitespace-nowrap">Contact Us</li>
        <li className="xl:p-4">Careers</li>
      </ul>
      <div
        onClick={toggleMenu}
        className="block pr-5  md:hidden items-center justify-between"
      >
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8  text-black relative"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 text-white "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
        <div
          className={
            isMenuOpen
              ? "fixed top-0 left-0 w-full h-full bg-white ease-in-out duration-500"
              : "fixed top-0 left-full w-full h-full bg-white ease-in-out duration-500"
          }
        >
          <div className="flex justify-between">
            <ul className="font-inter text-sm font-medium uppercase">
              <li className="pl-6 py-4 pt-8">Home</li>
              <li className="pl-6 py-4">Services</li>
              <li className="pl-6 py-4 whitespace-nowrap">About Us</li>
              <li className="pl-6 py-4 whitespace-nowrap">Contact Us</li>
              <li className="pl-6 py-4">Careers</li>
            </ul>
            <div className="pr-8 p-6 text-3xl font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8  text-black relative"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
