import React from "react";
import { menu } from "../constants";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Menu = () => {
  return (
    <section className="pt-20">
      <h2>Let's see how it works</h2>
      <div className="container lg:!px-20 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-10">
        {menu.map((men) => (
          <div key={men.id} className="">
            <div className="relative">
              <p className="absolute bg-pink-500 size-12 p-2 top-0 left-0 flex items-center justify-center text-white rounded-full font-semibold text-lg">
                {men.id}
              </p>
              <Image
                src={men.image}
                alt={men.name}
                width={200}
                height={200}
                className="lg:w-full mx-auto"
              />
            </div>
            <div className="py-2 mb-2 text-center px-4">
              <h3 className="text-xl font-bold mb-2">{men.name}</h3>
              <p className="text-[17px]">{men.description}</p>
            </div>
            <button className="group text-accent font-semibold block w-fit mx-auto">
              Start Earning{" "}
              <FaArrowRight className="inline-block ml-2 group-hover:animate-[arrow-slide_350ms_infinite_alternate_ease-in-out]" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
