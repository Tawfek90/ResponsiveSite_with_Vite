import React from "react";

export default function ContactForm() {
  return (
    <>
      <div className="btn flex justify-center mt-8">
        <div className="btn_container   ">
          <button className=" w-[165px] h-[40px] rounded-[32px] py-2 px-5 font-[400] leading-[24px] bg-[#E5ECF2] text-[#7B7F83] text-center ">
            Book a Meeting
          </button>
          <button className=" w-[165px] h-[40px] rounded-[32px] py-2 px-5 font-[400] leading-[24px] bg-[#00008D] text-[#FFF] text-center ">
            Contact Us
          </button>
        </div>
      </div>

      <div className="form_container  mt-16  flex justify-center">
        <form
          action=""
          className=" w-[80%] max-w-[832px] min-w-[300px] rounded-[20px] border border-[2] shadow-xl shadow-[#DDD] py-16 px-8 "
        >
          {/*contact Container */}
          <div className="Contact_container">
            <div className="item_container flex justify-between items-center flex-wrap">
              {/*first name */}
              <div className="item flex flex-col ">
                <label
                  htmlFor=""
                  className="text-[#00003B] font-[500] leading-[24px]"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  placeholder=" Ex.mohamed"
                  className=" border mt-3 rounded-[12px] outline-none p-4 border-[#E5ECF2] w-[70%] max-w-[374px] min-w-[300px]"
                />
              </div>
              {/*last name */}
              <div className="item flex flex-col md:mt-4 ">
                <label
                  htmlFor=""
                  className="text-[#00003B] font-[500] leading-[24px]"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  placeholder=" Ex.Nasser"
                  className=" border mt-3 rounded-[12px] outline-none p-4 border-[#E5ECF2] w-[70%] max-w-[374px] min-w-[300px]"
                />
              </div>
            </div>
            {/*Work Email * */}
            <div className="item flex flex-col mt-4 ">
              <label
                htmlFor=""
                className="text-[#00003B] font-[500] leading-[24px]"
              >
                Work Email *
              </label>
              <input
                type="text"
                placeholder=" Example@gmail.com"
                className=" border mt-3 rounded-[12px] outline-none p-4 border-[#E5ECF2] w-full  min-w-[300px]"
              />
            </div>
            {/*I would like to speak to someone about... **/}
            <div className="item flex flex-col mt-4 ">
              <label
                htmlFor=""
                className="text-[#00003B] font-[500] leading-[24px]"
              >
                I would like to speak to someone about... *
              </label>
              <select
                name="select"
                id=""
                className="border mt-3 rounded-[12px] outline-none p-4 w-full  min-w-[300px] border-[#E5ECF2]  "
              ></select>
            </div>
            {/*How Can We Help*/}
            <div className="item flex flex-col mt-4 ">
              <label
                htmlFor=""
                className="text-[#00003B] font-[500] leading-[24px]"
              >
                How Can We Help
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className=" h-[162px] border mt-3 rounded-[12px] outline-none p-4 w-full  min-w-[300px] border-[#E5ECF2] text-[#7B7F83]   "
              >
                your masseges ...
              </textarea>
            </div>
            {/*submit */}
            <div className="submi">
              <p className=" font-[400] leading-[24px] text-[12px] text-[#7B7F83]">
                We care about your privacy. By submitting this form, you will
                receive the requested information, as well as occasional related
                business insights from Velocity Global. You can unsubscribe at
                any time. For details, view our Privacy Policy.
              </p>
              <button
                type="submit"
                className=" w-full mt-2 bg-[#00008D] text-[#FFF] rounded-[50px] py-4 px-6"
              >
                Submit
              </button>
            </div>
          </div>
          {/*Book container */}
          <div className="Book_container"></div>
        </form>
      </div>
    </>
  );
}
