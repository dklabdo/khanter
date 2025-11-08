"use client";
import { ChevronRight, Languages, LogOut, Mail, MenuIcon, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function Nav() {
  const [show, setshow] = useState(false);
  return (
    <div className="w-full   z-30 max-w-screen m-0 p-0 absolute left-0 right-0   flex flex-col  bg-white  backdrop-blur-lg ">
      <div className="w-full   flex items-center px-2 md:px-5 justify-between  h-16    ">
        <div>
          {" "}
          <Image src="/logo.svg" width={100} height={40} alt="...." />{" "}
        </div>
        <ul className="text-black  hidden lg:flex gap-6">
          <li className=" hover:text-primary cursor-pointer ">Home</li>
          <li className=" hover:text-primary cursor-pointer ">About</li>
          <li className=" hover:text-primary cursor-pointer ">Services</li>
          <li className=" hover:text-primary cursor-pointer ">Contact</li>
        </ul>
        <div className="items-center flex lg:hidden gap-1 ">
          <button
            onClick={() => setshow(!show)}
            className="text-sm scale-90 text-primary  transition-all cursor-pointer font-light rounded-md  px-2 py-2  flex-row-reverse flex gap-1 items-center  "
          >
            {" "}
            {show ? <X size={25} /> : <MenuIcon size={25} />}
          </button>
        </div>
        <button className="px-4 hidden lg:flex scale-[.85] cursor-pointer hover:bg-black  items-center gap-2  text-sm text-white  bg-primary rounded-lg  py-3  " >
          <Mail size={18} className="text-white" />
          Contact us
        </button>
      </div>
      {show && (
        <div className="max-w-screen w-full h-[200px] ">
          <ul className=" px-5 pt-5 flex text-black flex-col gap-3  ">
            <li className="flex group hover:text-primary justify-between   cursor-pointer ">
              Home{" "}
              <ChevronRight
                size={22}
                className=" group-hover:text-primary "
              />
            </li>
            <li className="flex group justify-between  hover:text-primary cursor-pointer ">
              About{" "}
              <ChevronRight
                size={22}
                className=" group-hover:text-primary"
              />
            </li>
            <li className="flex group justify-between  hover:text-primary cursor-pointer ">
              Services{" "}
              <ChevronRight
                size={22}
                className=" group-hover:text-primary"
              />
            </li>
            <li className="flex group justify-between  hover:text-primary cursor-pointer ">
              Contact{" "}
              <ChevronRight
                size={22}
                className=" group-hover:text-primary"
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
