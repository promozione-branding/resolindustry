import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/layout/Navbar";
import SmoothScroll from "@/component/layout/SmoothScroll";
import Footer from "@/component/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Resol Industry",
  description: "Industrial solutions and manufacturing excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body>
        <Navbar />
        {children}
        <SmoothScroll />
        <Footer />
      </body>
    </html>
  );
}