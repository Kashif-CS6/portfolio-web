import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4">
      {/* left side */}
      <h1 className="text-[#00ffff] text-[1.5rem] font-bold">KashifNabeel</h1>
      <div className="text-white flex gap-6 items-center font-[500]">
        <Link href={"/"} className="hover:text-[#00ffff]">
          Home
        </Link>
        <Link href={"/"} className="hover:text-[#00ffff]">
          About
        </Link>
        <Link href={"/"} className="hover:text-[#00ffff]">
          Skills
        </Link>
        <Link href={"/"} className="hover:text-[#00ffff]">
          Projects
        </Link>

        <button className="bg-gradient-to-br from-cyan-400 to-fuchsia-500 hover:bg-cyan-500 text-black  py-[6px] px-8 border-none rounded-md text-base font-semibold cursor-pointer transition-all duration-300 ease-in-out no-underline inline-block">
          Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
