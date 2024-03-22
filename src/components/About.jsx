import React from "react";

export default function About() {
  return (
    <div className="about mt-8 flex  flex-wrap md:flex-col items-center justify-around xl:flex-row   ">
      <div className="img_container ">
        <img
          src="../images/people.png  "
          className=" xl:min-w-[600px] md:min-w-[300px]"
          alt="people"
        />
      </div>
      <div className="content w-[508px] sm:w-auto   ">
        <h2 className=" font-[700] px-2 text-[44px] sm:text-[30px] leading-[56px] text-[#00003B]">
          About Inovola?
        </h2>
        <p className=" w-[100%] min-w-[300px] px-2   font-[400] text-[18px] leading-[24px] text-[#5E6164]">
          Established in 2017, Inovola is a global service provider for
          software, HR and outsourcing solutions. We pride ourselves on being
          more than just a service provider - we are your partners in success.
          At the heart of our operation is a deep-seated belief in the power of
          customized experiences. We understand that each client and each
          project is unique, requiring a bespoke approach. Thus, we excel at
          tailoring our solutions and our customer experience to meet your
          specific needs, ensuring you receive a service that isn't just
          effective, but also seamlessly integrates with your existing
          processes. With Inovola, you're not just getting solutions, you're
          getting solutions made for you.
        </p>
        <button className=" w-[139px] mt-8   h-[56px] rounded-[50px] border py-4 px-6 text-[#00008D] border-[#00008D]">
          learn more
        </button>
      </div>
    </div>
  );
}
