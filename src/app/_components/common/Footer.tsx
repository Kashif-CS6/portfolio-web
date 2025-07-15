import React from "react";
import { VscGithub } from "react-icons/vsc";
import { ImLinkedin } from "react-icons/im";
import { FaFreeCodeCamp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-black font-[bold] py-6 flex flex-col gap-4">
      <div className="text-white flex  justify-center gap-6">
        <button className="flex flex-col gap-1 relative">
          <Image src={"/github.svg"} alt="github" width={36} height={36} />
          <hr className="bg-[#00ffff] border-1 border-[#00ffff] absolute w-10 bottom-0"></hr>
        </button>
        <button className="relative">
          <Image src={"/linkedin.svg"} alt="linkedin" width={36} height={36} />
          <hr className="bg-[#00ffff] border-1 border-[#00ffff] absolute w-10 bottom-0"></hr>
        </button>
        <button className="relative">
          <Image
            src={"/freecodecamp.svg"}
            alt="Freecodecamp"
            width={36}
            height={36}
          />
          <hr className="bg-[#00ffff] border-1 border-[#00ffff] absolute w-10 bottom-0"></hr>
        </button>
        <button className="relative">
          <Image src={"/twitter.svg"} alt="twitter" width={36} height={36} />
          <hr className="bg-[#00ffff] border-1 border-[#00ffff] absolute w-10 bottom-0"></hr>
        </button>
        <button className="relative">
          <SiLeetcode size={25} />
          <hr className="bg-[#00ffff] border-1 border-[#00ffff] absolute w-8 bottom-0 "></hr>
        </button>
      </div>
      <p className="text-white text-center">
        © 2025 Your Name. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
