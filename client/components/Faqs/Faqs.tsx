"use client";

import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { faqs } from "../constants";
import React from "react";

const Faqs = () => {
  const swiperRef = React.useRef<any>(null);
  return (
    <section className="pt-20">
      <h2>What people say about us</h2>
      <div className="container lg:!px-36">
        <div
          className="relative"
          onMouseEnter={() => swiperRef.current?.autoplay.stop()}
          onMouseLeave={() => swiperRef.current?.autoplay.start()}
        >
          <button
            className="faq-prev z-20 md:flex absolute top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-gray-600/80 text-white transition hover:bg-primary cursor-pointer"
            aria-label="Previous faq"
          >
            <HiOutlineArrowLeft className="text-2xl" />
          </button>
          <button
            className="faq-next right-0 z-20 md:flex absolute top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-gray-600/80 text-white transition hover:bg-primary cursor-pointer"
            aria-label="Next faq"
          >
            <HiOutlineArrowRight className="text-2xl" />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              prevEl: ".faq-prev",
              nextEl: ".faq-next",
            }}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              1023: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
            loop={true}
          >
            {faqs.map((faq) => (
              <SwiperSlide key={faq.id}>
                <article className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-10">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">
                        {faq.title}
                      </h3>
                      <div className="mt-3 flex items-center gap-1 text-amber-400">
                        {Array.from({ length: faq.rating }).map((_, index) => (
                          <AiFillStar key={index} className="text-2xl" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{faq.quote}</p>
                  </div>
                  <hr className="border-slate-200" />
                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full bg-white">
                      <Image
                        src={faq.avatar}
                        alt={faq.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-900">
                        {faq.name}
                      </p>
                      <p className="text-sm text-gray-500">{faq.role}</p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
