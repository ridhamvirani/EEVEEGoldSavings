"use client";
import React from "react";
import {
  AccountSteps,
  Features_About,
  OurClint1,
  features,
} from "@/utils/routes";
import { Fade, Zoom } from "react-awesome-reveal";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function AboutUs() {
  return (
    <div>
      <Navbar />

      <div className="bg-[--black]">
        <div className=" flex flex-col space-y-14  w-[90%]  mx-auto">
          <div className="lg:h-screen  lg:pt-10 pt-20 flex flex-col gap-4 lg:gap-0 lg:flex-row  justify-between items-center">
            <div className="w-full lg:w-1/2 flex justify-center items-center shrink-0">
              <Fade direction="left" triggerOnce cascade delay={500}>
                <Image
                  src="/investment.jpg"
                  className=""
                  alt="banner"
                  height={700}
                  width={700}
                />
              </Fade>
            </div>
            <div className="w-full mx-auto space-y-4 text-center lg:text-left lg:w-1/2 lg:px-16 ">
              <Fade direction="down" triggerOnce cascade delay={300}>
                <p className="text-[--white]  font-semibold text-[28px] lg:text-[40px] tracking-wide ">
                  {/* Welcome to a New Way of Building Gold Wealth */}
                  Welcome to Your Gold Wealth Revolution
                </p>
              </Fade>
              <Fade direction="down" triggerOnce cascade delay={400}>
                <p className="text-[--gray] lg:text-normal text-sm  md:font-medium tracking-wide">
                  At EEVEE GOLD, we’re transforming the way you build wealth
                  with our innovative, customer-focused solutions. Our mission
                  is straightforward: to make gold growth easy, rewarding, and
                  accessible for everyone. Whether you’re a newcomer or have
                  experience in the gold market, we offer customized
                  opportunities that cater to your needs while providing
                  exceptional value.
                </p>
              </Fade>

              <Fade direction="down" triggerOnce cascade delay={500}>
                <Link href="https://eevee.in/pages/our-store" target="_blank">
                  <button className="mt-10 hover:bg-[--secondary] hover:text-[--white] bg-[--white] rounded-full px-8 py-2 font-medium text-[--black] transition-all ease-in-out duration-500">
                    Visit EEVEE Gold
                  </button>
                </Link>
              </Fade>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div>
            <Fade direction="up" triggerOnce cascade delay={300}>
              <p className="text-[28px] md:text-[32px] font-semibold text-[--white] text-center ">
                Why Choose us
              </p>
            </Fade>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-4 md:space-y-0  md:space-x-6 lg:space-x-8  pt-10">
              <Fade
                direction="up"
                triggerOnce
                cascade
                delay={400}
                className="border border-slate-700 rounded-[12px] p-6 transition ease-in-out delay-150 hover:scale-105  cursor-pointer duration-300"
              >
                <div className="flex flex-col space-y-4">
                  <h1 className="text-xl text-left tracking-wider text-[#ededed] font-medium">
                    Next Generation of Purchasing
                  </h1>
                  <ol className="text-[--gray] text-sm text-justify tracking-wide list-disc pl-6 space-y-2 leading-relaxed">
                    <li>Built for the modern user.</li>
                    {/* <li>Offers a 16+1 Reward Program.</li> */}
                    <li>Incentives for Your Commitment</li>
                    {/* <li>
                      After 16 consecutive months, the 17th month is free.
                    </li> */}
                    <li>Maximize Your Wealth Effortlessly</li>
                    {/* <li>Helps customers maximize their wealth effortlessly.</li> */}
                    <li>
                      No hidden fees, with transparent and consistent rewards.
                    </li>
                    <li>Provides an intuitive dashboard to track progress.</li>
                    <li>
                      Customers remain in control of their wealth journey.
                    </li>
                  </ol>
                </div>
              </Fade>
              <Fade
                direction="up"
                triggerOnce
                cascade
                delay={400}
                className="border border-slate-700 rounded-[12px] p-6  transition ease-in-out delay-150 hover:scale-105  cursor-pointer duration-300"
              >
                <div className="flex flex-col space-y-4">
                  <h1 className="text-xl text-left tracking-wider text-[#ededed] font-medium">
                    The New Way to Purchase in Gold
                  </h1>
                  <h1 className="text-[--gray] text-sm text-justify tracking-wide">
                    Gold has been a trusted asset for centuries, and we make it
                    easier than ever to invest in it with cutting-edge
                    technology and superior customer service.
                  </h1>
                  <div className="space-y-4">
                    {OurClint1.map((val, index) => {
                      return (
                        <div key={index} className={`flex  w-full space-x-4`}>
                          <span>{val.icon}</span>
                          <div>
                            <p className="font-medium  text-[#ededed]">
                              {val.title}
                            </p>

                            <p className="text-[--gray] text-sm ">
                              {val.details}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Fade>
              <Fade
                direction="up"
                triggerOnce
                cascade
                delay={400}
                className="border border-slate-700 rounded-[12px] p-6  transition ease-in-out delay-150 hover:scale-105  cursor-pointer duration-300"
              >
                <div className="flex flex-col space-y-4">
                  <h1 className="text-xl text-left tracking-wider text-[#ededed] font-medium">
                    Seamless Account Creation
                  </h1>

                  <ol className="text-[--gray] text-sm text-justify tracking-wide list-disc pl-6 space-y-2 leading-relaxed">
                    {/* <li>Prioritizes simplicity in the process.</li>
                    <li>Signing up takes just a few minutes.</li>
                    <li>
                      Involves quick registration and identity verification.
                    </li>
                    <li>
                      Secure, user-friendly platform for managing wealth with
                      ease.
                    </li>
                    <li>
                      Designed to Help You Start Your Wealth-Building Journey
                      Seamlessly.
                    </li>
                    <li>
                      Empowers you to take control of your financial future from
                      the moment you create an account.
                    </li> */}
                    <li>Prioritizing Simplicity: We make signing up easy—create your
                    account in just a few minutes!</li>
                    <li> Quick Registration: Enjoy a
                    hassle-free sign-up process that includes swift identity
                    verification.</li>
                    <li> Secure and User-Friendly: Our platform is
                    designed for ease of use, empowering you to manage your
                    wealth effortlessly.</li>
                    <li> Empower Your Financial Future: Start
                    your wealth-building journey seamlessly from the moment you
                    create your account.</li>
                  </ol>
                </div>
              </Fade>
            </div>
          </div>

          {/* Our Commitment Section */}
          <div className="flex flex-col gap-4 lg:gap-16 lg:flex-row  justify-between items-center">
            <div className="w-full lg:w-1/2 flex justify-center items-center shrink-0">
              <Fade direction="left" triggerOnce cascade delay={500}>
                <Image
                  src="/commitment.jpeg"
                  className="bg-center bg-contain"
                  alt="banner"
                  height={700}
                  width={700}
                />
              </Fade>
            </div>
            <div className="w-full mx-auto text-center lg:text-left lg:w-1/2  ">
              <Fade direction="down" triggerOnce cascade delay={300}>
                <p className="text-[18px] md:text-[24px] font-semibold text-[--white] my-4 text">
                  Our Commitment to You
                </p>
              </Fade>
              <Fade direction="bottom" triggerOnce cascade delay={400}>
                <p className="text-[--gray] leading-relaxed">
                  {/* At EEVEE GOLD, we believe in loyalty, transparency, and
                  growth. We reward our customers for their trust and long-term
                  commitment. Whether it’s our 16+1 Reward Program or our
                  innovative gold options, we strive to provide you with the
                  tools to succeed. Our user-first approach ensures that your
                  journey is as rewarding as your results. */}
                  At EEVEE GOLD, we prioritize loyalty, transparency, and growth. We believe in rewarding our customers for their trust and long-term commitment. With our innovative gold options and tailored incentives, we provide you with the tools to succeed. Our user-first approach ensures that your journey is as rewarding as your results.
                </p>
              </Fade>
            </div>
          </div>

          {/* Our values*/}
          <div className="bg-black text-white ">
            <Fade direction="up" triggerOnce cascade delay={300}>
              <p className="text-[28px] md:text-[32px] font-semibold text-[--white] text-center">
                Our Values
              </p>
            </Fade>
            <div className=" flex flex-wrap justify-center gap-8 pt-10">
              {features.map((feature, index) => (
                <Zoom cascade key={index}>
                  <div className=" border border-slate-700 rounded-lg p-6 md:w-80 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className=" text-xl md:text-2xl font-semibold mb-2 text-[#ededed]">
                      {feature.title}
                    </h3>
                    <p className="text-[--gray]">{feature.description}</p>
                  </div>
                </Zoom>
              ))}
            </div>
          </div>

          {/* Our features */}
          <div className="pb-16">
            <Fade direction="up" triggerOnce cascade delay={300}>
              <h1 className="text-center text-[28px] md:text-[32px] font-semibold text-[--white] my-4">
                Let&lsquo;s Get To Know EEVEE`&lsquo;s Features
              </h1>
            </Fade>

            <div className="h-full md:w-[70%] mx-auto md:pt-10 pt-2 grid grid-cols-1 md:grid-cols-2">
              {Features_About.map((val, index) => {
                return (
                  <div
                    key={index}
                    className={`px-7 py-8 border-[--secondary] space-y-5 ${
                      index % 2 === 0
                        ? "md:border-r-2 md:border-r-[--primary]"
                        : ""
                    } ${
                      index < Features_About.length - 2
                        ? "border-b-2"
                        : "md:border-b-0"
                    } ${
                      index === Features_About.length - 2 &&
                      "md:border-b-0 border-b-2"
                    }`}
                  >
                    <Fade direction="up" triggerOnce cascade delay={400}>
                      <p className="text-white text-center text-lg md:text-xl font-medium md:font-semibold">
                        {val.title}
                      </p>
                    </Fade>
                    <Fade direction="up" triggerOnce cascade delay={500}>
                      <p className="text-[--gray] md:text-lg font-medium text-center">
                        {val.details}
                      </p>
                    </Fade>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
