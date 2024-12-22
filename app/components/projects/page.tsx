"use client";

import React, { useState, useEffect, useRef } from "react";
import { Container } from "@mui/material";
import { Button } from "@mui/base";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/app/contexts/ThemeContext";

export const Projects = () => {
  const { isDarkMode } = useTheme();
  const [activeSection, setActiveSection] = useState<string>("all");

  return (
    <div>
      <p className="flex text-sm text-themeSecondary justify-center poppins-semibold mt-10">
        PROJECTS
      </p>
      <h2 className="flex text-3xl text-themePrimary justify-center my-3">
        My Masterpiece Collection
      </h2>
      <p className="flex text-themeAccent poppins-thin text-sm text-center px-44 my-3">
        Explore my diverse range of projects where innovation meets
        functionality. Each piece in this collection highlights my dedication to
        excellence, creativity, and delivering results that exceed expectations.
      </p>

      <div className="flex justify-center items-center gap-12 relative mt-12">
        {["all", "web development", "ui/ux design", "graphic design", "ux research"].map(
          (section) => (
            <Button
              key={section}
              className={`${
                activeSection === section
                  ? "bg-themeHoverBackground text-[#7d1942] rounded-full shadow-inner-custom-8 py-2 px-6 transition-transform duration-300 ease-in-out transform hover:scale-105"
                  : `py-2 px-4 transition-transform duration-300 ease-in-out transform hover:scale-105 ${
                      isDarkMode ? "text-white" : "text-black"
                    }`
              }`}
            >
              <span className="poppins-regular text-sm uppercase">
                {section}
              </span>
            </Button>
          )
        )}
      </div>

      <Container className="my-3 shadow-inner-custom-3">
        <div className="flex">
          <Image
            src="/images/project.png"
            alt="project"
            width={500}
            height={500}
          />
          <Image
            src="/images/project.png"
            alt="project"
            width={500}
            height={500}
          />
          <Image
            src="/images/project.png"
            alt="project"
            width={500}
            height={500}
          />
        </div>

        <div className="flex">
          <Image
            src="/images/project.png"
            alt="project"
            width={500}
            height={500}
          />

          <Image
            src="/images/project.png"
            alt="project"
            width={500}
            height={500}
          />

          <Image
            src="/images/project.png"
            alt="project"
            width={500}
            height={500}
          />
        </div>
      </Container>
    </div>
  );
};
