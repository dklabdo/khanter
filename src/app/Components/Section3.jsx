"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Section3() {
  return (
    <section className="relative w-full   overflow-hidden bg-cover bg-center bg-no-repeat">
      {/* Parallax overlay movement */}

      {/* Text Content */}
      <div className="relative py-28 items-center  z-10 flex flex-col justify-between h-fit px-2 md:px-6  ">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl lg:text-5xl  text-black font-extrabold tracking-tight mb-4"
        >
          Discouver our services
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-sm lg:text-lg text-center px-2  text-gray-600 font-medium tracking-tight mb-12"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
          pariatur?
        </motion.h1>

        <div className="w-full flex flex-wrap  ">


          <div className="rounded-lg lg:w-1/2 scale-95 relative w-full h-[450px]  ">
            <Image
              src={"/img/img1.jpg"}
              fill
              alt="..."
              className=" object-cover brightness-75 rounded-lg "
            />
            <h1 className="py-2 absolute top-2 left-3 text-4xl font-bold text-white ">
              Automotive
            </h1>
            <div className="absolute p-3 gap-4  bottom-2 flex  items-center w-full overflow-x-auto  h-44 min-w-full min-h-44     ">
              <ServiceCard
                title={"Automotive"}
                par={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                }
              />
              <ServiceCard
                title={"Energy"}
                par={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                }
              />
              <ServiceCard
                title={"Electricity"}
                par={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                }
              />
              <ServiceCard
                title={"Oil & Gaz"}
                par={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                }
              />
            </div>
          </div>

          <div className="rounded-lg lg:w-1/2 scale-95 relative w-full h-[450px]  ">
            <Image
              src={"/img/img2.jpg"}
              fill
              alt="..."
              className=" object-cover brightness-75 rounded-lg "
            />
            <h1 className="py-2 absolute top-2 left-3 text-4xl font-bold text-white ">
              Energy
            </h1>

            <div className="absolute gap-4 p-3 bottom-2 flex  items-center overflow-x-auto w-full h-44 min-w-full min-h-44     ">
              <ServiceCard
                title={"Automotive"}
                par={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                }
              />
              <ServiceCard
                title={"Energy"}
                par={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                }
              />
              <ServiceCard
                title={"Electricity"}
                par={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                }
              />
              <ServiceCard
                title={"Oil & Gaz"}
                par={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                }
              />
            </div>
          </div>

          <div className="rounded-lg lg:w-1/2 scale-95 relative w-full h-[450px] ">
            <Image
              src={"/img/img3.jpg"}
              fill
              alt="..."
              className=" object-cover brightness-75 rounded-lg "
            />
            <h1 className="py-2 absolute top-2 left-3 text-4xl font-bold text-white ">
              Electricite
            </h1>

            <div className="absolute gap-4 p-3 bottom-2 flex  items-center overflow-x-auto w-full h-44 min-w-full min-h-44     ">
              <ServiceCard
                title={"Automotive"}
                par={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                }
              />
              <ServiceCard
                title={"Energy"}
                par={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                }
              />
              <ServiceCard
                title={"Electricity"}
                par={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                }
              />
              <ServiceCard
                title={"Oil & Gaz"}
                par={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                }
              />
            </div>
          </div>

          <div className="rounded-lg lg:w-1/2 scale-95 relative w-full h-[450px] ">
            <Image
              src={"/img/img4.jpg"}
              fill
              alt="..."
              className=" object-cover brightness-75 rounded-lg "
            />
            <h1 className="py-2 absolute top-2 left-3 text-4xl font-bold text-white ">
              Oil & Gaz
            </h1>

            <div className="absolute gap-4 p-3 bottom-2 flex  items-center overflow-x-auto w-full h-44 min-w-full min-h-44     ">
              <ServiceCard
                title={"Automotive"}
                par={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                }
              />
              <ServiceCard
                title={"Energy"}
                par={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                }
              />
              <ServiceCard
                title={"Electricity"}
                par={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                }
              />
              <ServiceCard
                title={"Oil & Gaz"}
                par={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, par }) {
  return (
    <div className="min-w-[80%] w-[80%] h-full flex flex-col justify-between p-3 rounded-lg bg-white ">
      <p className=" text-lg font-semibold text-black  "> {title} </p>
      <p className="  text-sm font-light text-gray-700 "> {par} </p>
    </div>
  );
}
