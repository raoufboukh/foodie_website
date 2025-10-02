import Image from "next/image";
import React from "react";
import { restaurants } from "../constants";
import { FaArrowRight } from "react-icons/fa";

const Restaurants = () => {
  return (
    <section className="pt-20">
      <p className="text-gray-500 text-center mb-10 sm:text-2xl font-bold">
        Explore the best restaurants in your area.
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(275px,1fr))] gap-6 container lg:!px-20 ">
        {restaurants.map((restaurants) => (
          <div
            key={restaurants.id}
            className="shadow-md rounded-lg overflow-hidden pb-3 hover:shadow-xl cursor-pointer hover:-translate-y-0.5 duration-300 transition-all"
          >
            <div className="w-full h-52 relative">
              <Image
                src={restaurants.image}
                alt={restaurants.name}
                width={300}
                height={200}
                className="w-full h-full"
              />
            </div>
            <div className="px-4 pt-1 flex flex-col justify-between h-28">
              <h3 className="text-xl font-semibold mb-2 hover:text-secondary transition-all duration-300">
                {restaurants.name}
              </h3>
              <div>
                {restaurants.categories.map((category, index) => (
                  <span
                    key={index}
                    className="inline-block bg-primary text-white sm:text-sm text-xs font-semibold px-2 py-1 rounded-full mr-2"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="group bg-accent px-7 block w-fit mx-auto py-2 text-lg hover:bg-secondary transition-all duration-300 cursor-pointer rounded-3xl text-white mt-10">
        Discover More{" "}
        <FaArrowRight className="inline-block ml-1 group-hover:animate-[arrow-slide_350ms_ease-in-out_infinite_alternate]" />
      </button>
    </section>
  );
};

export default Restaurants;
