"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import Nav from "./Nav";
import { DotBackgroundDemo } from "./DotBackgroundDemo";

export default function Section1() {
  
  return (
    <section
      className="relative  w-full   h-[600px]  overflow-hidden  "
    >
      <DotBackgroundDemo/>
        
     
     
    </section>
  );
}
