import React, { useState } from "react";
import Logo from "../assets/White Logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center w-full pr-4 h-20 text-white bg-PrimaryColor ">
      <div className="flex items-center">
      <a href="/home">

        <img src={Logo} className="h-6 w-60 -mt-2 ml-8 xl:ml-24" alt="" />
      </a>
      </div>
      <ul className="hidden md:flex uppercase gap-7 text-white mx-20">
        <li className="">
          <a href="/service" className="xl:p-4">
            Services
          </a>
        </li>
        <li className="">
          <a href="/about" className="xl:p-4 whitespace-nowrap">
            About Us
          </a>
        </li>
        <li className="">
          <a href="/contact" className="xl:p-4 whitespace-nowrap">
            Contact Us
          </a>
        </li>
        <li className="">
          <a href="/career" className="xl:p-4">
            Careers
          </a>
        </li>
      </ul>
      <div
        onClick={toggleMenu}
        className="block mr-5  md:hidden items-center justify-between"
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
            <ul className="font-inter text-sm font-medium uppercase text-black">
              <li className="  pt-8">
                <a href="/home" className="pl-6 pt-8">
                  Home
                </a>
              </li>
              <li className=" pt-8">
                <a href="/serv" className="pl-6 pt-8">
                Services
                </a>
              </li>
              <li className=" pt-8 whitespace-nowrap">
                <a href="/" className="pl-6  pt-8 ">
                About Us
                </a>
              </li>
              <li className=" pt-8  whitespace-nowrap">
                <a href="/" className="pl-6  pt-8 whitespace-nowrap">
                Contact Us
                </a>
              </li>
              <li className=" pt-8 ">
                <a href="/" className="pl-6  pt-8">
                Careers
                </a>
              </li>

              {/* <li className="pl-6 py-4 pt-8">Home</li>
              <li className="pl-6 py-4">Services</li>
              <li className="pl-6 py-4 whitespace-nowrap">About Us</li>
              <li className="pl-6 py-4 whitespace-nowrap">Contact Us</li>
              <li className="pl-6 py-4">Careers</li> */}
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
