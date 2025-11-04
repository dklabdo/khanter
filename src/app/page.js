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
  const containerRef = useRef(null);

  // Scroll progress for progress bar
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Nav />
      {/* <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 bottom-8 h-[5px] bg-blue-500 origin-left z-50"
      /> */}

      {/* SCROLL CONTAINER */}
      <div
        ref={containerRef}
        className="h-full w-full overflow-x-hidden overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      >
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>
    </div>
  );
}
