import React from "react";
import { IoIosArrowForward } from "react-icons/io";
export default function Blogs() {
  return (
    <div className="blogs">
      <div className="blogs_container w-[90%] mx-auto max-w-[1440px] min-w-[300px]">
        {/*content */}
        <div className="content w-full flex items-center justify-between">
          <h2 className=" font-[700] text-[44px] leading-[56px] text-[#00003B] sm:text-[30px]">
            Our Blogs
          </h2>
          <div className="show flex items-center text-[#3333A4] ">
            <button className=" font-[350] inline leading-[24px]  ">
              Show More Blogs
            </button>
            <span>
              <IoIosArrowForward />
            </span>
          </div>
        </div>
        {/*items */}
        <div className="list w-full mt-6 w-[90%] mx-auto max-w-[1264px] min-w-[300px]  grid grid-cols-3 gap-[30px] md:grid-cols-2 sm:grid-cols-1">
          {/*item1 */}
          <div className="item">
            <img src="../images/persons.png" alt="persons" />
            <img src="../images/Date.png" alt="Date" className=" mt-2" />
            <h2 className=" font-[700] text-[24px] md:text-[20px] sm:text-[17px]  leading-[32px] text-[#00003B] mt-3">
              Why Servicenow is The Best Cloud Software For You?
            </h2>
            <div className="Read flex items-center text-[#3333A4] mt-4 ">
              <button className=" font-[350] inline leading-[20px]  ">
                Read More
              </button>
              <span>
                <IoIosArrowForward />
              </span>
            </div>
          </div>
          {/*item2*/}
          <div className="item">
            <img src="../images/persons.png" alt="persons" />
            <img src="../images/Date.png" alt="Date" className=" mt-2" />
            <h2 className=" font-[700] text-[24px] md:text-[20px] sm:text-[17px]  leading-[32px] text-[#00003B] mt-3">
              Why Servicenow is The Best Cloud Software For You?
            </h2>
            <div className="Read flex items-center text-[#3333A4] mt-4 ">
              <button className=" font-[350] inline leading-[20px]  ">
                Read More
              </button>
              <span>
                <IoIosArrowForward />
              </span>
            </div>
          </div>
          {/*item3 */}
          <div className="item">
            <img src="../images/persons.png" alt="persons" />
            <img src="../images/Date.png" alt="Date" className=" mt-2" />
            <h2 className=" font-[700] text-[24px] xl:text-[22] md:text-[20px] sm:text-[17px]   leading-[32px] text-[#00003B] mt-3">
              Why Servicenow is The Best Cloud Software For You?
            </h2>
            <div className="Read flex items-center text-[#3333A4] mt-4 ">
              <button className=" font-[350] inline leading-[20px]  ">
                Read More
              </button>
              <span>
                <IoIosArrowForward />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
