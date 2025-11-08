"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import Nav from "./Nav";

export default function Section1() {
  
  return (
    <section
      className="relative w-full  h-[550px]  overflow-hidden bg-cover bg-center bg-no-repeat"
    >
        
      {/* Parallax overlay movement */}
      {/* <div className="absolute h-full inset-0 bg-gradient-to-b from-transparent via-black/70 to-black/80" /> */}
        <div className="absolute w-full h-full -z-20 flex justify-center items-center " >
            <div className=" w-52 mt-24 h-18 blur-[200px] min-h-18 min-w-96 bg-primary " >

            </div>
        </div>
      {/* Text Content */}
      <div className="relative justify-center  flex flex-col items-center h-full gap-3 ">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="  "
        >
          <Image className="scale-90 mb-4" src={"logo2.svg"} width={50} height={50} alt="..." />
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus possimus ut eius expedita voluptas, earum reprehenderit nulla assumenda! Sapiente, illo.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center mt-4 gap-2 px-4 py-3 rounded-lg text-sm bg-black text-white"
        >
            <DownloadIcon size={18} /> Telecharger nos catalogues
        </motion.button>
      </div>
    </section>
  );
}
