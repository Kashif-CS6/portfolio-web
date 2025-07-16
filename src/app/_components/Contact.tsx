import React from "react";

const Contact = () => {
  return (
    <div className="py-20">
      <div>
        <h1 className="text-[#00ffff] text-[45px] font-bold text-center pb-16 ">
          Get In Touch
        </h1>
        <div className="flex flex-col justify-center gap-6  w-[60%] mx-auto">
          {/* Name */}
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="name">Name</label>
            <div className="border-[1px] border-[rgba(255,255,255,0.3)] bg-[#ffffff1a] rounded-[9px] py-[14px] text-white">
              <input
                type="text"
                name="name"
                id="name"
                className="w-full px-4 outline-0 border-0"
              />
            </div>
          </div>
          {/* Email */}
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="email">Email</label>
            <div className="border-[1px] border-[rgba(255,255,255,0.3)] bg-[#ffffff1a] rounded-[9px] py-[14px] text-white">
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-4 outline-0 border-0"
              />
            </div>
          </div>
          {/* Message */}
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="message">Message</label>
            <div className="border-[1px] border-[rgba(255,255,255,0.3)] bg-[#ffffff1a] rounded-[9px] py-[10px] text-white">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4  outline-none border-0 bg-transparent resize-none text-white min-h-[4rem]"
              ></textarea>
            </div>
          </div>
          <button className="bg-gradient-to-br from-cyan-400 to-fuchsia-500 hover:bg-cyan-500 text-black w-fit  py-4 px-8 border-none rounded-full text-base font-bold cursor-pointer transition-all duration-300 ease-in-out no-underline inline-block">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
