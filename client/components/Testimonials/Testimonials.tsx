import Image from "next/image";
import React from "react";
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section className="pt-20">
      <div className="container lg:!px-24 grid lg:grid-cols-2 gap-3">
        <div className="flex items-center justify-center">
          <Image
            src={"/assets/a.png"}
            alt="testi"
            width={520}
            height={200}
            className="w-"
          />
        </div>
        <div>
          <h3 className="sm:text-4xl text-2xl font-bold mb-2.5">
            We deliver our products as fast as superman can do
          </h3>
          <p className="text-gray-600 mb-3 font-[550]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quos
            distinctio eaque deserunt porro doloremque.
          </p>
          <div>
            {testimonials.map((testi) => (
              <div key={testi.id} className="flex gap-4 items-center mb-5">
                <p className="text-gray-400 sm:text-5xl text-4xl font-semibold">
                  {testi.id}
                </p>
                <div>
                  <h3 className="sm:text-2xl text-xl font-semibold mb-2">
                    {testi.name}
                  </h3>
                  <p className="text-gray-800">{testi.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
