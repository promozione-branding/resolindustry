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
  title: "PVC Resin & Calcium Carbonate Importer in India | Resol Industries",
  description: "Resol Industries Ltd. (RIL), established in 2005, is a trusted importer and distributor of PVC Resin, Calcium Carbonate, polymers, and chemicals across India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ibmPlexSerif.variable}>
      <body className="overflow-x-clip">
        <Navbar />

        {children}

        <SmoothScroll />

        <Footer />
      </body>
    </html>
  );
}