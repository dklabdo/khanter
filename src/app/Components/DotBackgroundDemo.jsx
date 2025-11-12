"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";

export function DotBackgroundDemo() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const dots = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createDots();
    };

    const createDots = () => {
      const spacing = 25; // distance between dots
      const width = canvas.width;
      const height = canvas.height;
      dots.current = [];

      for (let y = spacing / 2; y < height; y += spacing) {
        for (let x = spacing / 2; x < width; x += spacing) {
          dots.current.push({ x, y, baseSize: 1, color: "#000" });
        }
      }
    };

    const draw = () => {
      ctx.fillStyle = "#FAFAFA"; // stable background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let dot of dots.current) {
        const dx = dot.x - mouse.current.x;
        const dy = dot.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // dots near the cursor glow and scale
        const influence = Math.max(0, 1 - dist / 120);
        const size = dot.baseSize + influence * 4;
        const color = influence > 0 ? "#FCC90E" : "#434343";

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }

      requestAnimationFrame(draw);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", handleMouseMove);

    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-w-full h-[800px] md:h-[700px] w-full flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="absolute top-[23%] w-full md:w-[70%] justify-center scale-95 md:scale-[.8] flex flex-col items-center  gap-3 ">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="  "
        >
          <Image
            className="scale-90 mb-4"
            src={"logo2.svg"}
            width={50}
            height={50}
            alt="..."
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl scale-95 w-full text-center text-primary  md:text-6xl font-extrabold tracking-tight mb-4"
        >
          Le symbole de l&apos;exelance
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-sm  w-full px-2 md:px-12 text-center md:text-lg"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          possimus ut eius expedita voluptas, earum reprehenderit nulla
          assumenda! Sapiente, illo.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center scale-105 mt-4 gap-2 px-4 py-3 rounded-lg text-sm bg-black text-white"
        >
          <DownloadIcon size={18} /> Telecharger nos catalogues
        </motion.button>
      </div>
    </div>
  );
}
