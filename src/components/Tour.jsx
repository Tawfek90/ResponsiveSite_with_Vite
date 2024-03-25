import React from "react";

export default function Tour() {
  return (
    <div className="tour mt-12">
      <div className="tour_container w-[90%] mx-auto max-w-[1264px] min-w-[300px] ">
        <h1 className=" font-[700] text-[44px] w-[65%] max-w-[842px] min-w-[300px] leading-[56px] text-[#00003B]">
          Take a Little Tour Around Our Agency
        </h1>
        <div className="text font-[400] leading-[24px] text-[#5E6164] mt-6">
          <p>
            Established in 2017, Inovola is a global service provider for
            software, HR and outsourcing solutions. We pride ourselves on being
            more than just a service provider - we are your partners in success.
            At the heart of our operation is a deep-seated belief in the power
            of customized experiences. We understand that each client and each
            project is unique, requiring a bespoke approach. Thus, we excel at
            tailoring our solutions and our customer experience to meet your
            specific needs, ensuring you receive a service that isn't just
            effective, but also seamlessly integrates with your existing
            processes. With Inovola, you're not just getting solutions, you're
            getting solutions made for you.
          </p>
          <p className=" mt-4">
            We know the power of the workforce and quality software solutions to
            be transformative forces in business. That's why our team is
            dedicated to leveraging this potential to bring our clients the best
            possible results, every single time. Our approach has enabled us to
            build long-lasting partnerships with businesses of all sizes - from
            small start-ups to large corporations; in addition to building a
            vast pool of highly experienced and professionally committed
            calibers that deliver value and excellence.
          </p>
        </div>
        <div className="img_container mt-6">
          <img src="../images/coffee.png" alt="coffe" />
        </div>
      </div>
    </div>
  );
}
