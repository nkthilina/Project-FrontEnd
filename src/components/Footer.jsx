import React from "react";
import Logo from '../assets/White Logo.png'

function Footer() {
  return (
    <div className=" bg-PrimaryColor pt-8 pb-6 text-white w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl h-[25px] w-[413px]">
              <img src={Logo} alt="" />
            </h4>
            <h5 className="text-base font-normal w-[413px] h-[57px] font-lato md:mt-8 mb-4">
            Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
            </h5>
          </div>
          <div className="w-full lg:w-6/12 px-4 font-inter">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-5/12 px-4 ml-auto">
                <span className="font-semibold block capitalize  text-xl mb-2 whitespace-nowrap">
                  Our Technologies
                </span>
                <ul className="list-unstyled text-sm font-medium">
                  <li>
                    <a
                      className="block pb-2 "
                      href="/"
                    >
                      ReactJS
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2"
                      href="/"
                    >
                      Gatsby
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2"
                      href="/"
                    >
                      NextJS
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2"
                      href="/"
                    >
                      NodeJS
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-5/12 px-4">
              <span className="font-semibold block capitalize  text-xl mb-2 whitespace-nowrap">
                  Our Services
                </span>
                <ul className="list-unstyled text-sm font-medium">
                  <li>
                    <a
                      className="block pb-2"
                      href="/"
                    >
                      Social media Marketing
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2"
                      href="/"
                    >
                      Web &amp; Mobile App 
                      <br />
                      development
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2"
                      href="/"
                    >
                      Data &amp; Analytics
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 mx-auto w-[630px] border-white" />
        <div className="flex flex-wrap items-center md:justify-between justify-center font-inter">
          <div className="w-full md:w-[4/12] px-4 mx-auto text-center">
            <div className="text-sm text-white capitalize font-medium py-1">
              <a
                href="/"
                className=""
                target="_blank"
              >
                {" "}
                Privacy policy
              </a>
              <span> | </span>
              <a
                href="/"
                className=""
              >
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