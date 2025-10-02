import Image from "next/image";
import React from "react";
import { FaMapMarkedAlt, FaGooglePlay, FaApple } from "react-icons/fa";
import { BsSend } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="pt-22">
      <div className="container flex justify-between flex-wrap items-center lg:!px-24">
        <div className="lg:basis-[45%] basis-[80%] pt-5 mx-auto lg:mx-0">
          <h3 className="sm:text-5xl text-3xl leading-tight font-bold text-center lg:text-left">
            Your favorite food <span className="text-muted">delivred</span> your
            home
          </h3>
          <p className="text-gray-500 my-5 sm:text-base text-sm font-bold text-center lg:text-left">
            Food, drinks, groceries, and more available for delivery and pickup
          </p>
          <div className="bg-gray-300 flex items-center justify-between shadow-2xl shadow-black/30 rounded-lg ">
            <div className="pl-3 basis-[7%]">
              <FaMapMarkedAlt className="text-gray-600 text-xl" />
            </div>
            <input
              type="text"
              placeholder="Enter your address"
              className="pl-2 basis-[75%] sm:text-xl border-none outline-none text-gray-600 sm:py-3 py-2"
            />
            <div className="bg-primary p-1 basis-[13%] self-stretch text-white rounded-tr-lg rounded-br-lg cursor-pointer flex items-center justify-center">
              <BsSend className="block mx-auto" />
            </div>
          </div>
          <div>
            <p className="my-5 lg:text-left text-center sm:text-base text-sm">
              Apps Available to download on
            </p>
            <div className="flex gap-2 items-center">
              <div className="flex items-center gap-2 sm:text-sm text-xs rounded-md border border-gray-400 px-2 py-1 cursor-pointer hover:shadow-lg transition-shadow duration-300 sm:mx-0 mx-auto">
                <FaGooglePlay className="text-xl text-black" />
                <p>
                  Download on the{" "}
                  <span className="font-bold block">Google Play</span>
                </p>
              </div>
              <div className="flex items-center gap-2 sm:text-sm text-xs rounded-md border border-gray-400 px-2 py-1 cursor-pointer hover:shadow-lg transition-shadow duration-300 sm:mx-0 mx-auto">
                <FaApple className="text-xl text-black" />
                <p>
                  Download on the{" "}
                  <span className="font-bold block">App Store</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:basis-[45%] basis-[80%] mx-auto lg:mx-0 lg:mt-0 mt-10">
          <Image
            src={"/assets/hero.jpg"}
            alt="hero"
            width={200}
            height={200}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
