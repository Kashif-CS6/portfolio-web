import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="py-30">
      <div className="flex flex-col justify-center items-center gap-10">
        {/* my picture */}
        <div className="w-[300px] h-[300px] rounded-full border-3 border-[#00ffff] shadow-[0_20px_80px_rgba(8,_112,_184,_0.3)]">
          <Image
            src={"/mine-b.png"}
            alt="Kashif Nabeel"
            width={500}
            height={500}
            className=" w-full h-full object-cover rounded-full"
          />
        </div>
        <h1 className=" text-[#00ffff] text-4xl font-bold ">
          Muhammad Kashif Nabeel
        </h1>
        <h1 className=" text-white text-2xl font-semibold ">
          MERN Stack Developer
        </h1>
        <p className="text-[20px]  text-white">
          Creating modern, scalable web applications with MongoDB, Express.js,
          React.js, and Node.js
        </p>
        <Link
          href={"/#contact"}
          className="bg-gradient-to-br from-cyan-400 to-fuchsia-500 hover:bg-cyan-500 text-black  py-4 px-8 border-none rounded-full text-base font-bold cursor-pointer transition-all duration-300 ease-in-out no-underline inline-block"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
};

export default Hero;
