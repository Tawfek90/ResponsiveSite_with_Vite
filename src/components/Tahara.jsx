import React from "react";

export default function Tahara() {
  return (
    <div className="tahara">
      <div className="tahara_container w-[90%] mx-auto max-w-[1400px] min-w-[300px] my-8 py-4 px-4 ">
        {/*mobile image */}
        <div className="image_container w-full max-w-[1264px] min-w-[300px]">
          <img src="../images/Mobile.png" alt="mobile" />
        </div>
        {/*tahara paragraph */}
        <div className="content mt-4">
          <h2 className=" text-[#00003B] text-[32px] leading-[40px] font-[350]">
            Tahara
          </h2>
          <p className=" text-[#5E6164] font-[400] leading-[24px] mt-4">
            Tahara is a mobile app that tracks menstruation cycle in terms of
            date, flow, fertility, ovulation and PMS symptoms. The client sought
            our services to hire a technical team for building said app.  The
            requirements were to hire an entire taskforce from the project
            manager to the technology and design team. Inovola delivered an
            outstanding team of professionals that delivered the project with
            impeccable timing, technical specs and within the agreed upon
            budget. Inovola is currently overseeing the upcoming additional
            scope to the project, which entails adding new features to the app
            by the newly sourced product manager.
          </p>
          <img src="../images/social.png" className=" mt-16" alt="" />
        </div>
        {/*customer Review */}
        <div className="customer">
          <div className="content mt-4">
            <h2 className=" text-[#00003B] text-[44px] leading-[56px] font-[700]">
              What customer say about us
            </h2>
            <p className=" text-[#5E6164] my-3 font-[400] text-[18px] leading-[24px] mt-4">
              We will bring the breathe of our experience and industry knowledge
              to help you succeed.
            </p>
          </div>
        </div>
        {/*square */}
        <div className="square flex items-center justify-between flex-wrap md:flex-col ">
          {/*videoosign +square */}
          <div className="videoSign ">
            <div className="ssquare w-[320px] h-[325px] lg:w-[250px] lg:h-[250px] sm:w-[160px] sm:h-[160px] rounded-[50px] border border-[2] border-[#DFE7EF] bg-[#EAEFF4] shadow-lg rotate-45 mt-16 relative">
              <img
                src="../images/video.png"
                className=" rotate-[78deg] absolute right-[-20px] top-[-18px]"
                alt="video"
              />
              <img
                src="../images/line.png"
                className=" rotate-[313deg] absolute right-[17px] top-[-59px]"
                alt="video"
              />
              <img
                src="../images/watch.png"
                className=" rotate-[313deg] absolute right-[-18px] top-[-86px]"
                alt="video"
              />
            </div>
          </div>
          {/*paragraph */}
          <div className="paragraph w-[50%] max-w-[692px] min-w-[300px] md:mt-16">
            <p className=" text-[#5E6164] font-[400] text-[18px] leading-[24px] ">
              “The service was great, Inovola were highly professional in
              providing it, as our deal began more than a year ago, by providing
              more than one talented resource who helped us complete our
              clients' projects. Besides, they were flexible during the contract
              period. I would like to thank all of Inovola team, as they were
              really kind and friendly, and we aspire to have greater
              cooperation between us in the future.”
            </p>
            <h2 className=" font-[500] my-2 text-[20px] leading-[24px] text-[#282C4B]">
              Zaid Mahmoud, Chief Executive Officer
            </h2>
            <img src="../images/involva.png" className=" mt-4" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
