import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

export default function Touch() {
  return (
    <div className="touch">
      <div className="touch_container w-[90%] mx-auto max-w-[1290px] min-w-[300px] ">
        {/*intro */}
        <div className="intro text-center">
          <h2 className=" text-[44px] text-[#00003B] font-[700] leading-[56px] ">
            Get in touch with us
          </h2>
          <p className=" font-[400] mt-4 text-[18px] leading-[24px] text-[#5E6164] ">
            Happy to serve you from our offices around the globe.
          </p>
        </div>
        {/*images */}
        <div className="images_container mt-8 flex items-center justify-between flex-wrap md:justify-center  ">
          <img src="../images/UAE.png" className=" grayscale" alt="" />
          <img src="../images/UK.png" className=" w-[326px]" alt="" />
          <img src="../images/Egypt.png" className=" grayscale" alt="" />
          <img
            src="../images/saudi.png"
            className=" sm:mt-4 grayscale"
            alt=""
          />
        </div>
        {/*info */}
        <div className="info mt-8 flex justify-between items-between flex-wrap md:justify-center ">
          {/*item */}
          <div className="item mt-4 flex items-center px-5 py-5 rounded-[50px] border border-[2] shadow-xl shadow-[#DDD] ">
            <div className="icon w-[60px] h-[60px] rounded-full border border-[#32E5AD] flex items-center justify-center ">
              <HiOutlineLocationMarker className=" text-[#00008D] text-[25px]" />
            </div>
            <div className="content w-[263px] ml-4">
              <h5 className=" text-[#23272F] text-[20px] leading-4=[24px] font-[350]">
                Location
              </h5>
              <p className=" text-[#5D5C5E] leading-[20px] font-[400] ">
                71-75 Shelton Street, London, Greater London, United Kingdom,
                WC2H 9JQ
              </p>
            </div>
          </div>
          {/*item */}
          <div className="item mt-4 flex items-center px-5 py-5 rounded-[50px] border border-[2] shadow-xl shadow-[#DDD]  ">
            <div className="icon w-[60px] h-[60px] rounded-full border border-[#32E5AD] flex items-center justify-center ">
              <CiPhone className=" text-[#00008D] text-[25px]" />
            </div>
            <div className="content w-[263px] ml-4">
              <h5 className=" text-[#23272F] text-[20px] leading-4=[24px] font-[350]">
                Phone
              </h5>
              <p className=" text-[#5D5C5E] leading-[20px] font-[400] ">
                +44 161 818 1556
              </p>
              <p className=" text-[#5D5C5E] leading-[20px] font-[400]">
                +966 11 520 9962
              </p>
            </div>
          </div>
          {/*item */}
          <div className="item mt-4 flex items-center px-5 py-5 rounded-[50px] border border-[2] shadow-xl shadow-[#DDD] ">
            <div className="icon w-[60px] h-[60px] rounded-full border border-[#32E5AD] flex items-center justify-center ">
              <MdOutlineEmail className=" text-[#00008D] text-[25px]" />
            </div>
            <div className="content w-[263px] ml-4">
              <h5 className=" text-[#23272F] text-[20px] leading-4=[24px] font-[350]">
                Email
              </h5>
              <p className=" text-[#5D5C5E] leading-[20px] font-[400] ">
                Support@inovola.com
              </p>
            </div>
          </div>
        </div>
        {/*map */}
        <div className="map mt-8">
          <img src="../images/map.png" alt="" />
        </div>
        {/*Touch */}
        <div className="touch mt-6">
          <div className="intro flex flex-col justify-center items-center">
            <h2 className=" font-[700] text-[44px] leading-[56px] text-[#00003B]">
              Let’s get in touch
            </h2>
            <p className=" font-[400] mt-4 text-[#5E6164] leading-[24px] text-[18px] w-[80%] max-w-[698px] min-w-[300px]">
              We believe that we will make a difference through a combination of
              smart planning, design thinking approach, and using the latest
              technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
