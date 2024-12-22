import type { Metadata } from "next";

import { poppins } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rachel Kenyani Portfolio",
  description:
    "Welcome to my portfolio, where creativity meets functionality. I’m Rachel, a passionate UI/UX designer and frontend developer based in Kenya, specializing in crafting engaging user experiences and visually stunning designs. Explore my projects that blend innovative design principles with cutting-edge technologies to bring ideas to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
