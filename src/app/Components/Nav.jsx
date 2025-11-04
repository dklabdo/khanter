"use client";
import { ChevronRight, Languages, LogOut, MenuIcon, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function Nav() {
  const [show, setshow] = useState(false);
  return (
    <div className="w-full   z-30 max-w-screen m-0 p-0 fixed left-0 right-0   flex flex-col    backdrop-blur-md ">
      <div className="w-full   flex items-center px-2 md:px-5 justify-between  h-16    ">
        <div>
          {" "}
          <Image src="/logo.svg" width={32} height={40} alt="...." />{" "}
        </div>
        <ul className="text-white  hidden lg:flex pl-8 gap-6">
          <li className="   cursor-pointer ">Home</li>
          <li className="   cursor-pointer ">About</li>
          <li className="   cursor-pointer ">Services</li>
          <li className="   cursor-pointer ">Contact</li>
        </ul>
        <div className="items-center flex  gap-1 ">
          <button
            onClick={() => setshow(!show)}
            className="text-sm scale-90 text-primary lg:hidden transition-all cursor-pointer font-light rounded-md  px-2 py-2  flex-row-reverse flex gap-1 items-center  "
          >
            {" "}
            {show ? <X size={25} /> : <MenuIcon size={25} />}
          </button>
        </div>
      </div>
      {show && (
        <div className="max-w-screen w-full h-[200px] ">
          <ul className=" px-5 pt-5 flex text-white flex-col gap-3  ">
            <li className="flex group text-white  justify-between   cursor-pointer ">
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
