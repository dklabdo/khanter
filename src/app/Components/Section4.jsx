"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Section4() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section
      ref={ref}
      className="relative w-full  h-dvh scroll-snap-start overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/img4.jpg')" }} // 👈 your image path
    >
      {/* Parallax overlay movement */}
      <div className="absolute h-full inset-0 bg-gradient-to-b from-transparent via-black/70 to-black/80" />

      {/* Text Content */}
      <div className="relative pb-6 z-10 flex flex-col justify-between h-dvh px-3 md:px-6 pt-24 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold tracking-tight mb-4"
        >
          Electricity
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-md text-justify md:text-xl"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          numquam praesentium ducimus reiciendis laudantium expedita earum nemo
          cum, quas iusto beatae, maxime nisi modi. Voluptate aspernatur
          quisquam eius architecto illum.
        </motion.p>
      </div>
    </section>
  );
}
