import { Bebas_Neue, Playfair_Display } from "next/font/google";
import "./globals.css";

import Navbar from "@/component/layout/Navbar";
import SmoothScroll from "@/component/layout/SmoothScroll";
import Footer from "@/component/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Resol Industry",
  description: "Industrial solutions and manufacturing excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` ${playfair.variable}`}
    >
      <body className="overflow-hidden">
        <Navbar />

        {children}

        <SmoothScroll />

        <Footer />
      </body>
    </html>
  );
}