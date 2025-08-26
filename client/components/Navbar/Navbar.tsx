"use client";
import React from "react";
import { MdClose, MdDeliveryDining } from "react-icons/md";
import { PiMoonFill } from "react-icons/pi";
import { IoSunny } from "react-icons/io5";
import { FcMenu } from "react-icons/fc";

interface NavbarProps {
  sectionRefs: {
    home: React.RefObject<HTMLElement | null>;
    restaurants: React.RefObject<HTMLElement | null>;
    features: React.RefObject<HTMLElement | null>;
    menu: React.RefObject<HTMLElement | null>;
    testimonials: React.RefObject<HTMLElement | null>;
    contact: React.RefObject<HTMLElement | null>;
  };
}

const Navbar: React.FC<NavbarProps> = ({ sectionRefs }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(0);
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const links = [
    {
      name: "Home",
      link: sectionRefs.home,
    },
    {
      name: "Restaurants",
      link: sectionRefs.restaurants,
    },
    {
      name: "Features",
      link: sectionRefs.features,
    },
    {
      name: "Menu",
      link: sectionRefs.menu,
    },
    {
      name: "Testimonials",
      link: sectionRefs.testimonials,
    },
    {
      name: "Contact",
      link: sectionRefs.contact,
    },
  ];
  return (
    <header
      className={`${
        scrolled > 0 ? "shadow-2xl" : "shadow-none"
      } fixed w-full py-4`}
    >
      <nav className="flex justify-between items-center container lg:!px-20">
        <div className="flex items-center gap-1 basis-[25%]">
          <div className=" p-2 rounded-full bg-primary text-white flex items-center justify-center">
            <MdDeliveryDining className="text-2xl" />
          </div>
          <h1 className="text-2xl font-bold">Foodie</h1>
        </div>
        <button
          className="lg:hidden text-3xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FcMenu />
        </button>

        <div
          className={`lg:relative rounded-2xl absolute lg:py-0 lg:px-0 py-2 px-4 lg:left-0 lg:shadow-none shadow-2xl left-1/2 lg:translate-x-0 lg:bg-transparent bg-accent/10 -translate-x-1/2 lg:top-0 block lg:flex items-center justify-between gap-6 basis-[73%] transition-all duration-300 ${
            isMenuOpen ? "top-16 " : "-top-80"
          }`}
        >
          <MdClose
            className="text-3xl cursor-pointer lg:hidden relative left-full -translate-x-5 mt-1 text-primary"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="space-x-6 font-bold">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.link as any)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 cursor-pointer lg:inline-block block my-2"
              >
                {link.name}
              </button>
            ))}
          </div>
          <div className="flex items-center lg:mb-0 mb-1 gap-4">
            <button className="bg-primary text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600 transition-colors duration-300">
              Join Now
            </button>
            <div
              className="bg-primary p-2 rounded-full text-2xl text-white cursor-pointer hover:text-blue-600 transition-colors duration-300"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? <IoSunny /> : <PiMoonFill />}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
