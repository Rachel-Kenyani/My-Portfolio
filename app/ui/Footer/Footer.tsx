"use client";

import {
  LocalPhoneOutlined,
  EmailOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";
import { useTheme } from "@/app/contexts/ThemeContext";

const Footer = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="bg-themeSecGradientHeader text-center text-white text-sm poppins-thin px-10 py-4">
      <p>© 2024 All rights reserved. Designed with 💜 by Imali</p>
    </div>
  );
};

export default Footer;
