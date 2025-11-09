"use client";

import Image from "next/image";

export default function Section2() {
  return (
    <section className="lg:flex-row gap-5 flex-col md:mb-14 scale-95 w-full mt-10 flex items-center  h-fit lg:h-[450px]  overflow-hidden ">
      <div className="relative px-2  z-10 flex flex-col lg:w-[55%] justify-between h-full  md:px-6  text-black">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          Qui sommes nous
        </h1>

        <div className="flex flex-col gap-5">
          <p className="text-md text-justify md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            ex in modi officiis, accusantium alias laboriosam deserunt. Facere
            minus fugiat cumque, laudantium harum maxime ipsam aliquam
            accusantium hic repudiandae ratione, eius quaerat quis inventore
            nisi.
          </p>
          <button className="w-fit px-6 py-3 rounded-lg text-sm bg-black text-white">
            Decouvrir Nous services
          </button>
        </div>
      </div>

      <div className="w-full lg:w-[45%] relative rounded-2xl h-[400px] lg:h-full ">
        <video
          className="absolute top-0 left-0 rounded-2xl min-w-full w-full h-full object-cover"
          src="/videos/background1.mp4" // 👉 put your video file path here
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Parallax overlay movement */}
        <div className="absolute h-full rounded-2xl inset-0 bg-gradient-to-b bg-primary/70" />
        <div className="absolute bottom-3 right-3 h-fit w-fit " >
          <Image className="scale-75" src={"icon-logo.svg"} width={60} height={60} alt="....."  />
        </div>
      </div>

      {/* Text Content */}
    </section>
  );
}
