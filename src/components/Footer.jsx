import React from "react";
import Logo from "../assets/White Logo.png";

function Footer() {
  return (
    <div className="bg-PrimaryColor ">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2 text-white lg:pl-10">
            <h1 className="max-w-lg text-xl font-semibold  text-white xl:text-2xl ">
            <a href="/home">
              <img src={Logo} alt="" className="" />
            </a>
            </h1>
            <h5 className="text-base font-normal w-80 md:w-3/4  font-lato mt-10 md:mt-8 mb-5 sm:mb-0">
             Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
             </h5>
            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row"></div>
          </div>
          <div>
            <span className="font-semibold text-white  block capitalize  text-xl mb-2 whitespace-nowrap">
              Our Technologies
            </span>
            <div className="flex flex-col items-start mt-5 space-y-2 text-white text-sm font-medium">
              <a href="/" className="">
                ReactJS
              </a>
              <a href="/" className="">
                Gatsby
              </a>
              <a href="/" className="">
                NextJS
              </a>
              <a href="/" className="">
                NodeJS
              </a>
            </div>
          </div>
          <div>
            <span className="font-semibold text-white  block capitalize  text-xl mb-2 whitespace-nowrap">
              Our Technologies
            </span>
            <div className="flex flex-col items-start mt-5 space-y-2 text-sm font-medium text-white capitalize whitespace-nowrap">
              <a href="/" className="">
                Social media Marketing{" "}
              </a>
              <a href="/" className="">
                Web &amp; Mobile App
                <br />
                development{" "}
              </a>
              <a href="/" className="">
                Data &amp; Analytics{" "}
              </a>
            </div>
          </div>
        </div>
        <hr className="my-6 mx-auto md:my-8 w-[630px] border-white" />
        <div className="flex flex-wrap items-center md:justify-between justify-center font-inter">
          <div className="w-full md:w-[4/12] px-4 mx-auto text-center">
            <div className="text-sm text-white capitalize font-medium py-1">
              <a href="/" className="" target="_blank">
                {" "}
                Privacy policy
              </a>
              <span> | </span>
              <a href="/" className="">
                Terms &amp; conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
