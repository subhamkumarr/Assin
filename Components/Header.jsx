import React from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";

const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo}
          alt=""
          width={180}
          className="w-[130px] sm:w-auto"
        />
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-3px_3px_0px_#000000]">
          get Started <Image src={assets.arrow} alt="" />
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blog</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ullam
          explicabo fugit? Distinctio provident ea exercitationem consequuntur
          harum vero perspiciatis, non, veritatis quod qui a? Eaque error neque
          cupiditate hic!
        </p>
      </div>
    </div>
  );
};

export default Header;
