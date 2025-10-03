import React from "react";
import { Qualities } from "../constants";
import Image from "next/image";

const Quality = () => {
  return (
    <section className="pt-20">
      <h2>Meet our Quality Features</h2>
      <div className="container lg:!px-20 grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
        {Qualities.map((quality, i) => (
          <div key={i} className="flex flex-col items-center">
            <Image
              src={quality.image}
              alt={quality.name}
              width={64}
              height={64}
              className="size-24"
            />
            <h3 className="text-xl font-semibold my-4">{quality.name}</h3>
            <p className=" text-center sm:px-10 px-2">{quality.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Quality;
