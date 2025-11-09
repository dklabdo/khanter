"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Contact } from "./Contact";

export default function Section5() {
  return (
    <section className="relative w-full    overflow-hidden bg-cover bg-center bg-no-repeat">
      <div className=" w-full flex flex-col gap-8  ">
        <h1 className="text-3xl lg:text-5xl  text-black font-extrabold tracking-tight mb-4 px-4 lg:text-center pt-12">
          Dscover our impact on the market{" "}
        </h1>
      </div>
      <div className="  "></div>

      <Contact />
    </section>
  );
}

function StatCard() {}
