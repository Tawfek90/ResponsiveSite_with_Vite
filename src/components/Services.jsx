import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
export default function Services() {
  return (
    <div className="services mt-8 ">
      {/*content */}
      <div className="content w-[38%] min-w-[300px] mx-auto text-center">
        <h2 className=" font-[700] text-[#00003B]  text-[44px] sm:text-[30px]    leading-[56px] ">
          Explore Our Services
        </h2>
        <p className=" font-[400] w-full text-[18px] leading-[24px] text-[#5E6164]">
          We provide a range of exceptional software solutions for your
          successful expansion.
        </p>
      </div>
      {/*services items */}
      <div className="services_items mt-8 w-[90%] mx-auto min-w-[300px] sm:text-center   grid  grid-cols-3 gap-[30px] md:grid-cols-1  ">
        {/*item1 */}
        <div className="item rounded-[50px] md:mx-auto  mt-8   flex flex-col items-start justify-between  ">
          <img
            src="../images/comp.png "
            className=" w-[61px] h-[61px] mx-0 md:mx-auto"
            alt="comp"
          />
          <h2 className=" font-[700] text-[24px] leading-[32px] sm:text-center sm:w-full   text-[#00004E]">
            Product Design
          </h2>
          <p className=" font-[400]  leading-[20px] md:w-[300px] my-4 text-[#5E6164]">
            At Inovola, we redefine the landscape of product design, offering
            services that expertly merge functionality with cutting-edge
            technologies. Our team, composed of seasoned designers, excels in
            developing technology products that are both visually appealing and
            highly functional.
          </p>
          <button className=" text-[#3333A4] font-[350] leading-[20px] sm:text-center sm:w-full ">
            learn more{" "}
            <span className=" text-[#3333A4]">
              <FaLongArrowAltRight className=" inline" />
            </span>
          </button>
        </div>

        {/*item2 */}
        <div className="item md:mx-auto   rounded-[50px] mt-8 flex flex-col items-start justify-between ">
          <img
            src="../images/tirs.png "
            className=" w-[61px] h-[61px] mx-0 md:mx-auto"
            alt="comp"
          />
          <h2 className=" font-[700] text-[24px] leading-[32px] sm:text-center w-full   text-[#00004E]">
            Software solutions
          </h2>
          <p className="  font-[400] h-[120px] md:w-[300px] leading-[20px]  my-4 text-[#5E6164]">
            We experience the whole journey with the client, starting from
            testing the scope of work all the way to delivery, ensuring that it
            encompasses all the needs and required deliverables.
          </p>
          <button className=" text-[#3333A4] font-[350] leading-[20px]  sm:text-center sm:w-full  ">
            learn more{" "}
            <span className=" text-[#3333A4]">
              <FaLongArrowAltRight className=" inline" />
            </span>
          </button>
        </div>
        {/*item3 */}
        <div className="item rounded-[50px]  md:mx-auto   mt-8 flex flex-col items-start justify-between   ">
          <img
            src="../images/circle.png "
            className=" w-[61px] h-[61px] mx-0 md:mx-auto"
            alt="comp"
          />
          <h2 className=" font-[700] text-[24px] leading-[32px]  sm:text-center w-full  text-[#00004E]">
            DevTeam as a Service
          </h2>
          <p className="  font-[400] h-[120px] md:w-[300px] leading-[20px]  my-4 text-[#5E6164]">
            At Inovola, we believe in delivering the best caliber to our
            clients. Our commitment is to offering experienced and professional
            software developers that are well paid and are ready to take on any
            challenge.
          </p>
          <button className=" text-[#3333A4] font-[350] leading-[20px] sm:text-center sm:w-full   ">
            learn more{" "}
            <span className=" text-[#3333A4]">
              <FaLongArrowAltRight className=" inline" />
            </span>
          </button>
        </div>
      </div>
      {/*arrows */}
      <div className="arrows flex items-center justify-center mt-2">
        <div className="right w-[60px] h-[60px] rounded-[30px] border-2 p-2 flex items-center justify-center ">
          <HiOutlineArrowSmRight className=" text-[#3333A4]" />
        </div>
        <div className="left w-[60px] h-[60px] rounded-[30px] border-2 p-2 flex items-center justify-center  ml-4">
          <HiOutlineArrowSmLeft className=" text-[#3333A4]" />
        </div>
      </div>
    </div>
  );
}
