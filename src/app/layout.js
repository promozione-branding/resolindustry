import { IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

import Navbar from "@/component/layout/Navbar";
import SmoothScroll from "@/component/layout/SmoothScroll";
import Footer from "@/component/layout/Footer";

const ibmPlexSerif = IBM_Plex_Serif({
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Resol Industry",
  description: "Industrial solutions and manufacturing excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ibmPlexSerif.variable}>
      <body className="overflow-hidden">
        <Navbar />

        {children}

        <SmoothScroll />

        <Footer />
      </body>
    </html>
  );
}