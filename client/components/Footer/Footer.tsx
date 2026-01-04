import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import { socials } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-[#1e2939] text-white text-center p-4 mt-10">
      <div className="container lg:!px-20">
        <div>
          <div className="flex items-center gap-1 basis-[25%]">
            <div className=" p-2 rounded-full bg-white text-primary flex items-center justify-center">
              <MdDeliveryDining className="text-2xl" />
            </div>
            <h1 className="text-2xl font-bold">Foodie</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
            ullam consequuntur voluptate eligendi, blanditiis ab quae maiores!
          </p>
          <div className="flex gap-3 justify-center mt-4">
            {socials.map((social, index) => (
              <div
                key={index}
                className="p-2 rounded-full"
                style={{ backgroundColor: social.color }}
              >
                <social.icon className="text-xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
