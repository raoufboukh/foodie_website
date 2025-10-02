"use client";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Restaurants from "@/components/Restauarants/Restaurants";
import { useRef } from "react";

export default function Home() {
  const sectionRefs = {
    home: useRef<HTMLElement | null | any>(null),
    restaurants: useRef<HTMLElement | null | any>(null),
    features: useRef<HTMLElement | null | any>(null),
    menu: useRef<HTMLElement | null | any>(null),
    testimonials: useRef<HTMLElement | null | any>(null),
    contact: useRef<HTMLElement | null | any>(null),
  };
  return (
    <>
      <Navbar sectionRefs={sectionRefs} />
      <div ref={sectionRefs.home}>
        <Hero />
      </div>
      <div ref={sectionRefs.restaurants}>
        <Restaurants />
      </div>
    </>
  );
}
