import { Bebas_Neue } from "next/font/google";
import "./globals.css";

import Navbar from "@/component/layout/Navbar";
import SmoothScroll from "@/component/layout/SmoothScroll";
import Footer from "@/component/layout/Footer";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "Resol Industry",
  description: "Industrial solutions and manufacturing excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={bebas.variable}>
      <body className="overflow-hidden">
        <Navbar />

        {children}

        <SmoothScroll />

        <Footer />
      </body>
    </html>
  );
}