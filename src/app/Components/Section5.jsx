"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Contact } from "./Contact";
import { User2 } from "lucide-react";

export default function Section5() {
  return (
    <section className="relative w-full  scale-95  overflow-hidden bg-cover bg-center bg-no-repeat">
      <div className=" w-full flex flex-col gap-8  ">
        <h1 className="text-3xl lg:text-5xl  text-black font-extrabold tracking-tight  px-4 lg:text-center ">
          Dscover our impact on the market{" "}
        </h1>
        <p
          className="text-sm lg:text-lg mb-5 text-center px-2  text-gray-600 font-medium tracking-tight "
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
          pariatur?
        </p>
      </div>
      <div className=" flex items-center flex-wrap justify-center   py-8 ">
        <StatCard index={1} />
        <StatCard index={2} />
        <StatCard index={4} />
        <StatCard index={3} />
      </div>

      <Contact />
    </section>
  );
}

function StatCard({index}) {
  return (
    <div className={` ${index%2 === 0 ? " md:w-[40%] " : "md:w-[60%] "} w-full relative cursor-pointer bg-[#F0F0F0] rounded-xl flex flex-col mb-4 scale-[.96]  p-6 `}  >
      <div className=" absolute rotate-12 text-white top-2 right-2 " >
        <User2 size={120} />
      </div>
      <h2 className=" text-4xl font-semibold text-black " > +230 </h2>
      <p className=" px-1 z-30 text-sm " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eaque.</p>
      <div className=" w-full h-2 bg-white rounded-lg mt-18 " >
        <div className={` ${index === 1 && "w-[50%] "} ${index === 2 && "w-[30%] "} ${index === 3 && "w-[70%] "} ${index === 4 && "w-[85%] "} h-2  bg-black rounded-lg  `} ></div>
      </div>
    </div>
  )
}
