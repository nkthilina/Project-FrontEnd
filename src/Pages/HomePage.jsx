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
      <div className="hero">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-h-[763px]">
            <div className="hidden md:flex absolute w-[630px] h-[306px] text-white bg-PrimaryColor flex-col justify-center mt-[354px] ml-[80px] gap-20">
              <h1 className="px-4 text-4xl sm:text-5xl md:text-5xl leading-[48px] font-bold w-[630px] h-">
                <span className="text-blue-600 capitalize">
                  We crush your competitors, goals, and sales records - without
                  the B.S.
                </span>
              </h1>
              <Button text="Get free consultation" />
            </div>
            <img src={HeroImage} alt="" />
            <div className="md:hidden flex  w-full h-full text-gray-200 max-h-[500px] flex flex-col justify-center">
              <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl font-bold">
                <span className="text-blue-600">Hero</span>
              </h1>
              <Button text="Get free consultation" />
            </div>
          </div>
        </div>{" "}
      </div>
      {/* end hero section */}

      {/* analytics section */}
      <div className="analytics">
        <div className="w-full h-screen px-4 py-16">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
            <img
              className="w-[414px]h-[414px] mx-auto my-4"
              src={Image01}
              alt=""
            />
            <div className="flex flex-col justify-center">
              <h1 className="uppercase text-[27px] leading-8 font-poppins text-PrimaryColor">
                Web & Mobile App Development
              </h1>
              <p className="font-inter text-base font-normal">
                Your web and mobile Apps are pieces of the puzzle to grow your
                business. We use frameworks which tailor content and engagement
                methods to respond to different intents shown by your potential
                customers who interact with your business online.
              </p>
              <Button text="Learn more" />
            </div>
          </div>
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
            <div className="hidden md:flex flex-col justify-center">
            <h1 className="uppercase text-[27px] leading-8 font-poppins text-PrimaryColor">
                Digital Strategy Consulting
              </h1>
              <p className="font-inter text-base font-normal">
              Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
              </p>
              <Button text="Learn more" />
            </div>
            <img
              className="w-[414px] h-[414px] mx-auto my-4"
              src={Image02}
              alt=""
            />
            <div className="flex md:hidden flex-col justify-center">
              <p className="uppercase text-xl tracking-widest text-[#5651e5]">
                Data Analytical
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                ducimus modi rerum praesentium laboriosam eaque, voluptate
                asperiores minima illum repellat ut et totam eligendi! Fuga
                blanditiis minus maxime in facere?
              </p>
              <Button text="Get Started now" />
            </div>
          </div>
        </div>
      </div>
      {/* end analytics section */}

      {/* faqs section */}
      <div className="h-full bg-blue pt-20 items-center w-full pb-10">
        <h1 className="font-poppins text-[27px] text-PrimaryColor leading-[33px] text-semibold    h-[500px] flex  justify-center">
          Frequently asked questions
        </h1>
        <div className="p-4">
          <Accordion title="What is Webflow and why is it the best website builder?" answer="Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere." />
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?" answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer." />
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?" answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer." />
        </div>
      </div>
      {/* end faqs section */}

      <Footer />
    </div>
  );
}
