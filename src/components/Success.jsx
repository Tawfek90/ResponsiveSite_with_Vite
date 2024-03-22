import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { HiOutlineArrowSmLeft } from "react-icons/hi";

export default function Success() {
  return (
    <div className="success capitalize relative  h-[594px]  bg-[url('../images/Rectangle.png')] bg-cover bg-no-repeat bg-center  ">
      {/*blue container */}
      <div className="success_container absolute w-[100%] h-[594px] opacity-[.4] z-10 bg-gradient-to-r from-[#00008D] to-[#2BDBCB]"></div>
      {/*content container */}
      <div className="content_container">
        {/*paragraph */}
        <div className="text   h-[404px] text-[#FFF] opacity-1 my-4 mx-8 absolute z-20 top-[48px] left-[88px] md:left[50px] sm:left-[8px] ">
          <h2 className=" w-[417px] sm:w-auto  h-[216px] sm:h-auto font-[700] leading-[72px] text-[60px] md:text-[40px] sm:text-[30px] ">
            Your success technical partner
          </h2>
          <p className="  h-[64px] text-[18px] mt-6 leading-[32px]">
            Finding the right software development partner can change
            everything!{" "}
          </p>
          <button className=" w-[178px] h-[56px] rounded-[50px] py-4 px-6 text-[18px] font-[350] leading-[24[px]] bg-[#32E5AD] text-[#00008D] mt-4 sm:mt-10 ">
            Let’s Connect!
          </button>
        </div>
        {/*arrows */}
        <div className="arrows absolute top-[398px] right-[9%] z-30 sm:right-[7%]">
          <div className="right w-[60px] h-[60px] rounded-[30px] border-2 p-2 flex items-center justify-center ">
            <HiOutlineArrowSmRight className=" text-[#fff]" />
          </div>
          <div className="left w-[60px] h-[60px] rounded-[30px] border-2 p-2 flex items-center justify-center mt-8">
            <HiOutlineArrowSmLeft className=" text-[#fff]" />
          </div>
        </div>
      </div>
    </div>
  );
}
