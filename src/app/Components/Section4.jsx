"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Section4() {
  return (
    <section className="relative scale-95 w-full flex flex-col items-center mt-5   overflow-hidden bg-cover bg-center bg-no-repeat">
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
        className="text-sm lg:text-lg mb-2 text-center px-2  text-gray-600 font-medium tracking-tight "
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
        pariatur?
      </motion.h1>
      <div className="w-full gap-4 scale-95 py-5 flex-col md:flex-row flex  ">
        <ValueCArd />
        <ValueCArd />
        <ValueCArd />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-sm mt-6 lg:text-lg mb-2 text-center px-2  text-gray-600 font-medium tracking-tight "
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
        pariatur?
      </motion.h1>
      <InfiniteScroll />
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-sm mt-6 lg:text-lg mb-2 text-center px-2  text-gray-600 font-medium tracking-tight "
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
        pariatur?
      </motion.h1>
      <div className="w-full scale-90    justify-center flex items-center gap-4 py-5 ">
        <ClientFidele />
        <ClientFidele />
        <ClientFidele />
      </div>
    </section>
  );
}

function ValueCArd() {
  return (
    <div className="w-full  h-[300px] relative border border-solid border-white/40 rounded-2xl overflow-hidden">
      <div className="w-full h-full p-1 absolute ">
        <div className="w-full h-full rounded-xl   bg-[#222]">
          <Image
            className="rounded-xl w-full h-full object-cover  "
            src={"/img/img2.jpg"}
            width={1000}
            height={100}
            alt="..."
          />
        </div>
      </div>

      <div className="w-full  h-full flex items-center justify-center relative "></div>

      <div className="w-full h-full p-2 flex justify-between absolute inset-0">
        <div className="w-[50%] cursor-pointer hover:w-full transition-all scale-95 p-2 pt-3 pb-1.5 flex flex-col rounded-xl justify-between backdrop-blur-lg bg-gray-50/10 text-gray-200 font-medium ">
          <span className="text-3xl font-medium">
            We value the integrity in our{" "}
          </span>
          <span className="text-md text-white"> #Environment </span>
        </div>
      </div>
    </div>
  );
}

function KeenSliderPlugin(slider) {
  let timeout;
  let mouseOver = false;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }

  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 2500);
  }

  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });
  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
}

function InfiniteScroll() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      renderMode: "performance",
      slides: {
        perView: 3,
        spacing: 15,
      },
      animation: {
        duration: 10, // slower = smoother
        easing: (t) => t,
      },
    },
    [KeenSliderPlugin]
  );

  return (
    <div className="w-full relative flex items-center   py-12 overflow-hidden">
      <div className=" absolute w-full z-20 top-0 left-0 bg-gradient-to-r from-[#FAFAFA] via-transparent  to-[#FAFAFA] h-full "></div>
      <div ref={sliderRef} className="keen-slider">
        {[1, 2, 3, 4, 5, 6].map((src, i) => (
          <div
            key={i}
            className="keen-slider__slide  min-w-32 flex justify-center items-center"
          >
            <h1 className="text-3xl  font-bold text-gray-500 ">
              {" "}
              Partner {src}{" "}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClientFidele() {
  return (
    <div class="card w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48  bg-white/30 backdrop-blur-lg rounded-xl flex items-center justify-center p-4 "></div>
  );
}
