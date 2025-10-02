import React from "react";
import { features } from "../constants";

const Features = () => {
  return (
    <section className="pt-20">
      <h2>Popular categories by food</h2>
      <div className="container lg:!px-30 flex flex-wrap justify-center gap-5">
        {features.map((feature, i) => (
          <p
            key={i}
            className="bg-gray-200 px-6 py-2 rounded-3xl hover:bg-accent transition-all duration-300 sm:text-xl cursor-pointer hover:text-white"
          >
            {feature}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Features;
