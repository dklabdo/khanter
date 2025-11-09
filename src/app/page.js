"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import Nav from "./Components/Nav";
import Section5 from "./Components/Section5";

export default function ScrollPage() {
  return (
    <div className="relative w-full bg-bg 2xl:container mx-auto h-screen  overflow-hidden">
      <Nav />

      {/* SCROLL CONTAINER */}
      <div className="h-full w-full overflow-x-hidden overflow-y-scroll  scroll-smooth">
        <Section1 />
        <Section2 />

        <Section3 />

        <Section5 />
      </div>
    </div>
  );
}
