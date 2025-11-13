import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="w-full  overflow-x-hidden pb-12 bg-primary">
      <div className="w-full  text-black py-20 flex justify-center items-center ">
        <Image
          src="/icon-logo.svg"
          width={200}
          height={100}
          className="scale-90"
          alt="..."
        />
      </div>
      <hr className="w-[90%] mx-auto bg-black/80 outline-none border-none   h-[1px] " />
      <div className="px-4 w-full md:pl-12 justify-center pt-10 flex flex-col sm:flex-row sm:flex-wrap">
        <div className="flex w-full sm:w-1/2 md:w-1/4 flex-col py-6 px-5 gap-4 ">
          <h1 className="text-black text-lg font-semibold ">Company</h1>
          <a className="text-black text-sm font-medium ">K-linker</a>
          <a className="text-black text-sm font-medium ">Services</a>
          <a className="text-black text-sm font-medium ">Solution</a>
        </div>

        <div className="flex w-full sm:w-1/2 md:w-1/4 flex-col py-6 px-5 gap-4 ">
          <h1 className="text-black text-lg font-semibold ">Legal</h1>
          <a className="text-black text-sm font-medium ">Privacy Policy</a>
          <a className="text-black text-sm font-medium ">Terms & Services</a>
          <a className="text-black text-sm font-medium ">Team</a>
        </div>

        <div className="flex w-full sm:w-1/2 md:w-1/4 flex-col py-6 px-5 gap-4 ">
          <h1 className="text-black text-lg font-semibold ">Contact</h1>
          <a className="text-black text-sm font-medium ">
            email : contact@k-linker.com
          </a>
          <a className="text-black font-poppins font-extralight text-sm  ">
            Phone numbers : <br /> 0699542392 / 0781228522 / 0556337136
          </a>
        </div>

        <div className="flex  w-full sm:w-1/2 md:w-1/4 flex-col py-6 px-5 gap-4 ">
          <h1 className="text-black text-lg font-semibold ">Our office</h1>
          <a className="text-black text-sm font-medium ">
            {" "}
            Localisation : Rue Harir Bekhaled - Bel Arbi - Sidi Bel Abbes 22000
            Algérie.
          </a>
          <Image
            className="rounded-xl "
            src="/localisation.png"
            width={300}
            alt="no img"
            height={250}
          />
        
        
        </div>


        <div className="w-full font-poppins pb-2 pt-10 text-sm text-center pr-4  flex justify-center text-black">
          &copy;Copyright <br />
          All right reserved to k-linker 2025
        </div>
      </div>
    </div>
  );
}

export default Footer;