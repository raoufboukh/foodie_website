import Navbar from "@/components/Navbar/Navbar";
import { useRef } from "react";

export default function Home() {
  const sectionRefs = {
    home: useRef<HTMLElement | null>(null),
    restaurants: useRef<HTMLElement | null>(null),
    features: useRef<HTMLElement | null>(null),
    menu: useRef<HTMLElement | null>(null),
    testimonials: useRef<HTMLElement | null>(null),
    contact: useRef<HTMLElement | null>(null),
  };
  return <Navbar sectionRefs={sectionRefs} />;
}
