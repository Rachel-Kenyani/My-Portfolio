"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

import { LightModeOutlined, DarkModeOutlined } from "@mui/icons-material";
import { Button } from "@mui/base";
import { useTheme } from "@/app/contexts/ThemeContext";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const darkRef = useRef(null);
  const lightRef = useRef(null);

  const [activeSection, setActiveSection] = useState<string>("home");

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setActiveSection(id);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`bg-themeBackground sticky top-5 left-0 z-20 flex px-10 items-center rounded-full mx-6 before:absolute before:inset-0 before:backdrop-blur-md before:rounded-full before:z-[-1] ${
        isDarkMode ? "shadow-outer-custom-4" : "shadow-outer-custom-3"
      }`}
    >
      <div className="flex items-center w-1/6 h-full">
        <Image
          src={isDarkMode ? "/assets/Logo-dark.png" : "/assets/Logo.svg"}
          alt="Imali logo with a stylized leaf design to the left and the word 'imali' in bold, serif font to the right."
          width={100}
          height={100}
          className="py-2"
        />
      </div>

      <div className="flex items-center gap-12 w-6/12 relative">
        {["home", "services", "experience", "projects", "contact"].map(
          (section) => (
            <Button
              key={section}
              onClick={() => handleScroll(section)}
              className={`${
                activeSection === section
                  ? "active bg-themeHoverBackground text-[#7d1942] rounded-full shadow-inner-custom-8 py-2 px-4 transition-transform duration-300 ease-in-out transform hover:scale-105"
                  : `py-2 px-4 transition-transform duration-300 ease-in-out transform hover:scale-105 ${
                      isDarkMode ? "text-white" : "text-black"
                    }`
              }`}
            >
              <span className="poppins-regular text-sm capitalize">
                {section}
              </span>
            </Button>
          )
        )}
      </div>

      <div className="relative w-1/3 h-full flex justify-end gap-3 items-center">
        <span className="poppins-medium text-themeAccent text-sm items-center">
          Light
        </span>

        {/* Toggle Button */}
        <div className="bg-themeHoverBackground shadow-inner-custom-8 transition-transform duration-300 ease-in-out transform hover:scale-105 mx-1.5 relative w-24 h-10 rounded-3xl flex items-center justify-between">
          <div
            className={`${
              !isDarkMode
                ? "bg-gradient-to-b from-[#dc923b9e] to-[#dc923b]"
                : ""
            } rounded-full w-10 h-10 flex items-center justify-center`}
            onClick={toggleTheme}
          >
            <LightModeOutlined
              className="text-white transition-all duration-300"
              ref={lightRef}
            />
          </div>

          {/* Dark Mode Indicator */}
          <div
            className={`${
              isDarkMode ? "bg-gradient-to-b from-[#643589] to-[#000000]" : ""
            } rounded-full w-10 h-10 flex items-center justify-center`}
            onClick={toggleTheme}
          >
            <DarkModeOutlined
              className={`${
                isDarkMode ? "text-white" : "text-black"
              } transition-all duration-300`}
              ref={darkRef}
            />
          </div>
        </div>

        <span className="poppins-medium text-themeAccent text-sm items-center">
          Dark
        </span>
      </div>
    </div>
  );
};

export default Navbar;
