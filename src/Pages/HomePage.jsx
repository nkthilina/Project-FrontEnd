import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import HeroImage from "../assets/Hero Image.jpg";
import Image01 from "../assets/image 2.jpg";
import Image02 from "../assets/image 1.jpg";
import Accordion from "../components/Accordion";

export default function HomePage() {
  return (
    <div>
      <Navbar />

      {/* hero section */}
      <div className="hero lg:mb-10 xl:-mb-0 2xl:-mb-40">
        <div className="w-full ">
          <div className="w-full lg:h-screen ">
            <div className="hidden lg:flex absolute md:w-1/2 w-5/12 p-5 xl:h-80 mb-5 text-white  flex-col justify-center mt-80 ml-20 bg-gradient-to-r from-green-400 to-blue-400">
              <h1 className="px-6 text-4xl sm:text-5xl md:text-5xl leading-10 font-bold ">
                <span className="text-white capitalize mt-8">
                  We crush your competitors, goals, and sales records - without
                  the B.S.
                </span>
              </h1>
              <div className="px-4 pt-5">
                <Button text="Get free consultation" />
              </div>
            </div>
            <img
              src={HeroImage}
              alt=""
              className="lg:object-cover md:w-full "
            />
            <div className="lg:hidden flex text-white flex-col justify-center bg-gradient-to-r from-green-400 to-blue-400">
            <div className="m-5">
              <h1 className="  text-4xl  leading-[48px] font-bold sm:w-11/12">
                <span className="-5 capitalize">
                  We crush your competitors, goals, and sales records - without
                  the B.S.
                </span>
              </h1>
              <div className=" pt-5">
                <Button text="Get free consultation" />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      {/* end hero section */}

      {/* analytics section */}
      <div className="analytics flex items-center justify-center m-5">
        <div className="w-[1064px] px-4 sm:mx-5">
          <div className="max-w-[1064px] mx-auto grid md:grid-cols-2 gap-8">
            <img
              className="md:w-[414px] md:h-[414px] w-[275px] h-[275px] mx-auto my-4 "
              src={Image01}
              alt=""
            />
            <div className="flex flex-col md:items-start items-center justify-items-center my-auto">
              <div className="uppercase text-[27px] md:text-left text-center leading-8 font-poppins text-PrimaryColor justify-items-center">
                Web & Mobile App Development
              </div>
              <div>
                <p className="font-inter text-base md:text-left text-center font-normal py-4">
                  Your web and mobile Apps are pieces of the puzzle to grow your
                  business. We use frameworks which tailor content and
                  engagement methods to respond to different intents shown by
                  your potential customers who interact with your business
                  online.
                </p>
              </div>
              <Button text="Learn more" />
            </div>
          </div>
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
            <div className="hidden md:flex flex-col justify-center my-auto">
              <h1 className="uppercase text-[27px]  leading-8 font-poppins text-PrimaryColor">
                Digital Strategy Consulting
              </h1>
              <p className="font-inter  text-base font-normal py-4">
                Your digital strategy should complement the overall marketing
                strategy of the company. In online marketing, each component
                will never work in isolation and every business needs a
                different mix. We provide a clear concept and strategic overview
                to find the most efficient model for your business.
              </p>
              <Button text="Learn more" />
            </div>
            <img
              className="md:w-[414px] md:h-[414px] w-[275px] h-[275px] mx-auto my-4"
              src={Image02}
              alt=""
            />
            <div className="flex md:hidden flex-col justify-center items-center justify-items-center">
              <p className="uppercase text-center text-[27px] leading-8 font-poppins text-PrimaryColor">
              Digital Strategy Consulting
              </p>
              <p className="font-inter text-center text-base font-normal py-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                ducimus modi rerum praesentium laboriosam eaque, voluptate
                asperiores minima illum repellat ut et totam eligendi! Fuga
                blanditiis minus maxime in facere?
              </p>
              <Button text="Learn more" />
            </div>
          </div>
        </div>
      </div>
      {/* end analytics section */}

      {/* faqs section */}
      <div className="flex justify-center items-center w-full my-10">
        <div className="w-11/12 mt-5">
          <h1 className="font-poppins text-[27px] text-PrimaryColor leading-8 font-semibold text-center mx-5 sm:mx-0 mb-4">
            Frequently asked questions
          </h1>
          <div className="p-4">
            <Accordion
              title="What is Webflow and why is it the best website builder?"
              answer="Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere."
            />
            <Accordion
              title="Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?"
              answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
            />
            <Accordion
              title="Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?"
              answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
            />
          </div>
        </div>
      </div>

      {/* end faqs section */}

      <Footer />
    </div>
  );
}
