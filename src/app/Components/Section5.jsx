"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Contact } from "./Contact";

export default function Section5() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section
      ref={ref}
      className="relative w-full   scroll-snap-start overflow-hidden bg-cover bg-center bg-no-repeat"
    >
        <Contact/>
     
    </section>
  );
}
