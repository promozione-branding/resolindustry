import { IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

import Navbar from "@/component/layout/Navbar";
import SmoothScroll from "@/component/layout/SmoothScroll";
import Footer from "@/component/layout/Footer";
import FloatingGif from "@/component/home/StickySection";
import OfficeLocations from "@/component/home/OfficeLocations";
import ConditionalOfficeLocations from "@/component/layout/ConditionalOfficeLocations";

const ibmPlexSerif = IBM_Plex_Serif({
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "PVC Resin & Calcium Carbonate Importer in India | Resol Industries Limited",
  description: "Resol Industries Limited (RIL), established in 2005, is a trusted importer and distributor of PVC Resin, Calcium Carbonate, polymers, and chemicals across India.",
  alternates: {
    canonical: "https://www.resolindustries.com/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.resolindustries.com/#organization",
      name: "Resol Industries Limited",
      url: "https://www.resolindustries.com/",
      description:
        "Resol Industries Limited is an importer, wholesaler, supplier and distributor of polymers, PVC resin and industrial chemicals across India.",
      telephone: ["+91-11-41417725", "+91-9355804591", "+91-9355804595"],
      email: "info@resolvinyls.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Office No. DSM-321, DLF Tower, Shivaji Marg",
        addressLocality: "New Delhi",
        postalCode: "110015",
        addressCountry: "IN",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      knowsAbout: [
        "PVC Resin",
        "Calcium Carbonate",
        "PET Resin",
        "Polypropylene",
        "Plasticizers",
        "Citric Acid",
        "Melamine",
        "Industrial Polymers",
        "Industrial Chemicals",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.resolindustries.com/#website",
      url: "https://www.resolindustries.com/",
      name: "Resol Industries Limited",
      publisher: {
        "@id": "https://www.resolindustries.com/#organization",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.resolindustries.com/#new-delhi-office",
      name: "Resol Industries Limited - New Delhi Office",
      url: "https://www.resolindustries.com/",
      telephone: "+91-11-41417825",
      email: "info@resolvinyls.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Office No. DSM-321, DLF Tower, Shivaji Marg",
        addressLocality: "New Delhi",
        postalCode: "110015",
        addressCountry: "IN",
      },
      parentOrganization: {
        "@id": "https://www.resolindustries.com/#organization",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ibmPlexSerif.variable}>
      <body className="overflow-x-clip">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />

        {children}

        <SmoothScroll />
        <FloatingGif />
        <ConditionalOfficeLocations/>
        <Footer />
      </body>
    </html>
  );
}