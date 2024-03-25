import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoFacebook } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
export default function Footer() {
  return (
    <footer className=" mt-8 ">
      <div className="footer_container px-8 md:px-6 sm:px-2 w-[100%]  max-w-[1440px] min-w-[300px]">
        <div className="content w-full flex items-center justify-between h-[160px] bg-[#E5ECF2]">
          {/*text */}
          <div className="text  ">
            <h2 className=" font-[700] text-[32px] leading-[34px] sm:text-[20px] text-[#00008D]">
              Do you need any help?
            </h2>
            <p className=" font-[350] text-[18px] sm:text-[16px] leading-[34px] text-[#161616] ">
              We Are Always Here to Help You
            </p>
          </div>
          <button className=" font-[350] text-[22px] sm:text-[16px] text-[#FFF] bg-[#00008D] py-[21px] sm:py-[13px] px-[46px] sm:px-[20px] rounded-[80px]">
            Get in Touch
          </button>
        </div>
        {/*conclusion */}
        <div className="conslution  bg-[#00004E]  w-full grid grid-cols-4 gap-[99px] lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
          {/*p1 */}
          <div className="p1 px-4 py-2 flex flex-col justify-between">
            {/*logo */}
            <div className="logo  ">
              <img
                src="../images/logoo.png"
                className="  relative top-[15px]"
                alt="logo"
              />
            </div>
            {/*item */}
            <div className="item   flex items-start justify-start mt-12 ">
              <div className="location ">
                <CiLocationOn className="text-[#37FCBE]" />
              </div>
              <div className="content ml-3">
                <h2 className=" font-[350] leading-[19.2px] text-[#37FCBE]">
                  UK Branche
                </h2>
                <p className=" font-[400] mt-2 text-[14px] leading-[16px] text-[#B4B4B4] min-w-[200px]">
                  71-75 Shelton Street, London, Greater London, United Kingdom,
                  WC2H 9JQ+44 161 818 1556
                </p>
              </div>
            </div>
            {/*item */}
            <div className="item  flex items-start justify-start mt-6 ">
              <div className="location ">
                <CiLocationOn className="text-[#37FCBE]" />
              </div>
              <div className="content ml-3">
                <h2 className=" font-[350] leading-[19.2px] text-[#37FCBE]">
                  UAE Branche
                </h2>
                <p className=" font-[400] min-w-[200px] mt-2 text-[14px] leading-[16px] text-[#B4B4B4]">
                  Dubai Silicon Oasis+971 44 396 288
                </p>
              </div>
            </div>
            {/*item */}
            <div className="item  flex items-start justify-start mt-6 ">
              <div className="location ">
                <CiLocationOn className="text-[#37FCBE]" />
              </div>
              <div className="content ml-3">
                <h2 className=" font-[350] leading-[19.2px] text-[#37FCBE]">
                  Saudi Arabia Branche
                </h2>
                <p className=" font-[400] min-w-[200px] mt-2 text-[14px] leading-[16px] text-[#B4B4B4]">
                  34 Gamal Salem street, Dokki, Giza+20 101 978 1543
                </p>
              </div>
            </div>
            {/*item */}
            <div className="item  flex items-start justify-start mt-6 ">
              <div className="location ">
                <CiLocationOn className="text-[#37FCBE]" />
              </div>
              <div className="content ml-3">
                <h2 className=" font-[350] leading-[19.2px] text-[#37FCBE]">
                  Egypt Branche
                </h2>
                <p className=" font-[400] min-w-[200px] mt-2 text-[14px] leading-[16px] text-[#B4B4B4]">
                  34 Gamal Salem street, Dokki, Giza+20 101 978 1543
                </p>
              </div>
            </div>
          </div>
          {/*p2 */}
          <div className="p2 px-4 py-2  text-[#FFF] mt-8 sm:mt-[-3rem] flex flex-col justify-between">
            <h2 className=" text-[22px] leading-[29px] font-[500] capitalize">
              our services
            </h2>
            <p className=" my-4 leading-[26px] font-[400] text-[#B4B4B4] ">
              Product Consultation
            </p>
            <p className=" my-4 leading-[26px] font-[400] text-[#B4B4B4] ">
              Product Design
            </p>
            <p className=" my-4 leading-[26px] font-[400] text-[#B4B4B4] ">
              Software solutions
            </p>
            <p className=" my-4 leading-[26px] font-[400] text-[#B4B4B4] ">
              DevTeam as a Service
            </p>
            <p className=" my-4 leading-[26px] font-[400] text-[#B4B4B4] ">
              HR as a Service
            </p>
            <p className=" my-4 leading-[26px] font-[400] text-[#B4B4B4] ">
              DevOps Services
            </p>
          </div>
          {/*p3*/}
          <div className="p2 px-4 py-2  text-[#FFF] mt-8 sm:mt-[-3rem] flex flex-col justify-between">
            <h2 className=" text-[22px] leading-[29px] font-[500] capitalize">
              Our Products
            </h2>
            <p className=" my-4 leading-[26px] font-[400] text-[#B4B4B4] ">
              Fluido
            </p>
            <p className=" my-4 leading-[26px] font-[400] text-[#B4B4B4] ">
              Ai Proctor
            </p>
            <p className=" my-4 leading-[26px] font-[400] text-[#B4B4B4] ">
              TGV-Ai
            </p>
            <p className=" my-4 leading-[26px] font-[600] text-[26px] text-[#FFF] ">
              Partners
            </p>
            <p className=" my-4 leading-[26px] font-[400] text-[#B4B4B4] ">
              Our Partners
            </p>
            <p className=" my-4 leading-[26px] font-[400] text-[#B4B4B4] ">
              Become a Partner
            </p>
          </div>
          {/*p4*/}
          <div className="p2 px-4 py-2  text-[#FFF] mt-8 sm:mt-[-3rem] flex flex-col justify-between">
            <h2 className=" text-[22px] leading-[29px] font-[500] capitalize">
              Company
            </h2>
            <p className=" my-4 leading-[26px] font-[400] text-[#B4B4B4] ">
              Our Company
            </p>
            <p className=" my-4 leading-[26px] font-[400] text-[#B4B4B4] ">
              Careers
            </p>
            <p className=" my-4 leading-[26px] font-[400] text-[#B4B4B4] ">
              News & Events
            </p>
            <p className=" my-4 min-w-[200px] leading-[26px] font-[600] text-[26px] text-[#FFF] ">
              Stay Connected
            </p>
            <div className="social mb-4 flex items-center justify-between w-[150px] cursor-pointer">
              <IoLogoFacebook />
              <FaLinkedin />
              <RiTwitterXFill />
              <AiOutlineInstagram />
            </div>
          </div>
        </div>
        <hr />
        <div className="copyrights px-4 py-3 bg-[#00004E] text-[#FFF] w-full flex md:flex-col items-center justify-between">
          <p className=" font-[400] text-[15px] leading-[27px] flex-[2] ">
            © Copyright ©2024 <span className=" text-[#37FCBE]">Inovola</span> .
            All Rights Reserved
          </p>
          <div className="text flex-1  flex items-center justify-between ">
            <p className="  font-[400] text-[15px] leading-[27px]">
              Terms and Conditions
            </p>
            <p className="  font-[400] text-[15px] leading-[27px]">
              Privacy policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
