"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Card } from "@mui/material";
import { useTheme } from "@/app/contexts/ThemeContext";

const ServiceCard = ({
  Icon,
  title,
  description,
  idx,
  hoveredIndex,
  setHoveredIndex,
}: {
  Icon: React.ElementType;
  title: string;
  description?: string;
  idx: number;
  hoveredIndex: number | null;
  setHoveredIndex: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className="relative flex justify-center items-center p-4 h-full w-full rounded-2xl"
      onMouseEnter={() => setHoveredIndex(idx)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === idx && (
          <motion.span
            className={`absolute inset-0 h-full w-full block rounded-2xl z-0 ${
              isDarkMode ? "bg-[#7d1942]" : "bg-[#DC95B2]"
            }`}
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <Card
        className={`bg-white py-8 px-4 w-60 h-56 flex flex-col items-center justify-center rounded-2xl relative z-10 ${
          isDarkMode ? "shadow-outer-custom-4" : "shadow-outer-custom-3"
        }`}
        sx={{
          background: isDarkMode
            ? "radial-gradient(circle, #000000, #021526)"
            : "radial-gradient(circle, rgba(216,224,228,0.1) 0%, rgba(216,224,228,0.4) 100%)",
        }}
      >
        <Icon sx={{ fontSize: 60, color: "var(--themePrimaryIcon)" }} />
        <div className="w-3/5 h-1 bg-themePrimaryIcon rounded-lg"></div>
        <p className="text-center text-lg poppins-regular mt-3 text-textColor">
          {title}
        </p>
        {description && (
          <p className="text-center text-lg poppins-regular text-textColor">
            {description}
          </p>
        )}
      </Card>
    </div>
  );
};

export const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const serviceItems = [
    {
      Icon: require("@mui/icons-material/CodeRounded").default,
      title: "Web",
      description: "Development",
    },
    {
      Icon: require("@mui/icons-material/DesignServicesOutlined").default,
      title: "UI/UX",
      description: "Design",
    },
    {
      Icon: require("@mui/icons-material/SearchOutlined").default,
      title: "User Experience",
      description: "Research",
    },
  ];
  return (
    <div className="relative mt-10 bg-contain bg-no-repeat bg-right h-[90vh]">
      <p className="flex text-sm text-themeSecondary justify-center poppins-semibold">
        SERVICES
      </p>
      <h2 className="flex text-3xl text-themePrimary justify-center my-3">
        What Am I Great At
      </h2>
      <p className="flex text-themeAccent poppins-thin text-sm text-center px-44 my-3">
        A comprehensive range of services is provided, tailored to meet the
        unique needs of each client. The goal is to deliver high-quality
        solutions that not only look great but also perform exceptionally.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-24 mx-44">
        {serviceItems.map((item, idx) => (
          <ServiceCard
            key={idx}
            idx={idx}
            Icon={item.Icon}
            title={item.title}
            description={item.description}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        ))}
      </div>
    </div>
  );
};
