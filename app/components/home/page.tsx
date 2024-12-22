"use client";

import Image from "next/image";
import { useTheme } from "@/app/contexts/ThemeContext";

export const Home = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="flex justify-center relative h-[95vh] overflow-hidden">
      <Image
        src={isDarkMode ? "/images/Graphic-dark.png": "/images/Graphic.png"}
        alt="Pattern made from repeating Imali logo symbol. The logo symbol is a stylized leaf with a small curl at the top."
        width={380}
        height={380}
        className="bg-cover bg-no-repeat w-[100vw] h-[100vh] absolute -z-10"
      />

      <div className="relative flex justify-center items-center z-0">
        <div className="inline-flex flex-col mt-4">
          <p
            className="text-lg text-themeAccent flex 
            poppins-thin justify-center"
          >
            👋🏾 I'm Rachel Kenyani
          </p>
          <p
            className="text-8xl text-themeSecGradientHeader flex justify-center
             poppins-bold"
          >
            Web Developer
          </p>
          <p className="text-8xl text-themeBackground font-outline-1 pt-3 flex justify-center poppins-bold">
            & UI<span className="px-1">/</span>UX Designer
          </p>
          <span
            className="text-lg text-themeAccent ps-3 flex justify-start
             mt-2 poppins-thin"
          >
            based in Nairobi, Kenya
          </span>
          <div className="flex justify-center inset-x-1/3">
            <Image
              src={isDarkMode ? "/images/Imali-dark.png": "/images/Imali.png"}
              alt="Rachel"
              width={380}
              height={380}
              className="rounded-b-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
