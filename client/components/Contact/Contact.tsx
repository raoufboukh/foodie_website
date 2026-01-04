import Image from "next/image";
import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="pt-30 pb-10">
      <div className="container lg:!px-20 grid lg:grid-cols-2 lg:gap-4 gap-6">
        <div>
          <Image
            src="/assets/app.png"
            alt="Contact"
            width={500}
            height={500}
            className="lg:ml-auto mx-auto"
          />
        </div>
        <div className="my-10 lg:px-10 lg:text-left text-center">
          <h3 className="sm:text-4xl text-2xl font-bold mb-4">
            Connecting our user with iOS & Android apps. Download from iTune &
            Play store
          </h3>
          <p className="text-gray-600 py-1 mb-5 sm:text-[17px]">
            Pick one of our stock themes, or create your custom theme with the
            most advanced theme editor on any online survey building tool. We’re
            driven beyond just finishing the projects. We want to find solutions
            using our website & apps.
          </p>
          <div className="flex gap-5 items-center text-white">
            <div className="flex items-center gap-2 sm:text-sm text-xs rounded-md border border-gray-400 px-2 py-1 cursor-pointer hover:shadow-lg transition-shadow duration-300 lg:mx-0 mx-auto bg-black">
              <FaGooglePlay className="text-xl" />
              <p>
                Download on the{" "}
                <span className="font-bold block">Google Play</span>
              </p>
            </div>
            <div className="flex items-center gap-2 sm:text-sm text-xs rounded-md border border-gray-400 px-2 py-1 cursor-pointer hover:shadow-lg transition-shadow duration-300 lg:mx-0 mx-auto bg-black">
              <FaApple className="text-xl" />
              <p>
                Download on the{" "}
                <span className="font-bold block">App Store</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
