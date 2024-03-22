import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
export default function Products() {
  return (
    <div className="products mt-6">
      <div className="Intro_container text-center w-[50%] mx-auto min-w-[300px] max-w-[532px]">
        <h2 className=" font-[700] text-[44px] leading-[56px] text-[#00003B]">
          Our Products
        </h2>
        <p className=" font-[400] text-[18px] leading-[24px] text-[#5E6164]">
          We provide a range of exceptional software solutions for your
          successful expansion.
        </p>
      </div>
      {/*list */}
      <div className="list mt-2  w-[90%] mx-auto min-w-[300px] max-w-[1264px] flex flex-wrap gap-4 items-center justify-between md:flex-col">
        <div className="item mt-4">
          <img src="../images/fluido.png " className=" mx-auto" alt="fluido" />
          <div className="content mt-6 text-center">
            <h2 className=" font-[700] text-[24px] leading-[32px] text-[#00004E] ">
              FLUIDO
            </h2>
            <p className=" font-[400] leading-[20px] text-[#5E6164]  w-[80%] mx-auto mt-4 max-w-[300px] min-w-[300px]  ">
              Fluido creates sta-free conversations with customers so businesses
              can focus on growing faster and with less labor. The tool
              generates human-like conversations with your customers using
              Artificial Intelligence.
            </p>
            <button className=" text-[#3333A4] font-[350] leading-[20px] sm:text-center sm:w-full mt-2   ">
              learn more
              <span className=" text-[#3333A4]">
                <FaLongArrowAltRight className=" inline" />
              </span>
            </button>
          </div>
        </div>
        <div className="item mt-4">
          <img
            src="../images/AIProctor.png "
            className=" mx-auto"
            alt="fluido"
          />
          <div className="content mt-6 text-center">
            <h2 className=" font-[700] text-[24px] leading-[32px] text-[#00004E] ">
              AI PROCTOR
            </h2>
            <p className=" font-[400] leading-[20px] text-[#5E6164]  w-[80%] mx-auto mt-4 max-w-[300px] min-w-[300px] ">
              AI Proctor is a proctoring system powered by artificial
              intelligence used to monitor online exams. During the exam, the
              instructor is notified in real time of any suspicious activity by
              the exam takers. The instructor can chat in real time with the
              student, he can also remove the student permanently from the exam
              using the real time monitoring dashboard.
            </p>
            <button className=" text-[#3333A4] font-[350] leading-[20px] sm:text-center sm:w-full mt-2   ">
              learn more
              <span className=" text-[#3333A4]">
                <FaLongArrowAltRight className=" inline" />
              </span>
            </button>
          </div>
        </div>
        <div className="item mt-4">
          <img src="../images/TGV_AI.png " className=" mx-auto" alt="fluido" />
          <div className="content mt-6 text-center">
            <h2 className=" font-[700] text-[24px] leading-[32px] text-[#00004E] ">
              TGV- AI
            </h2>
            <p className=" font-[400] leading-[20px] text-[#5E6164]  w-[80%] mx-auto mt-4 max-w-[300px] min-w-[300px] ">
              TGV-AI is a comprehensive end-to-end solution, customized to meet
              specific business needs. A computer vision model that has been
              meticulously trained and finetuned to address the particularities
              of the various use cases it is created for.
            </p>
            <button className=" text-[#3333A4] font-[350] leading-[20px] sm:text-center sm:w-full mt-2   ">
              learn more
              <span className=" text-[#3333A4]">
                <FaLongArrowAltRight className=" inline" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
