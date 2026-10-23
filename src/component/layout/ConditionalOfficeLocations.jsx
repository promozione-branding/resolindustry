"use client";

import { usePathname } from "next/navigation";
import OfficeLocations from "@/component/home/OfficeLocations";

export default function ConditionalOfficeLocations() {
  const pathname = usePathname();

  // Pages where OfficeLocations should be hidden
  const hiddenPages = [
    "/zaikai",
    "/contact-us",
  ];

  if (hiddenPages.includes(pathname)) {
    return null;
  }

  return <OfficeLocations />;
}