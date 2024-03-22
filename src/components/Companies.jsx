import React from "react";

export default function Companies() {
  return (
    <div className="companies  mt-4">
      <div className="companies_container relative w-[90%] mx-auto min-w-[300px] max-w-[1264px] rounded-[50px]">
        <img src="../images/frame.png" className=" w-full " alt="frame" />
        <div className="frames w-[212px] h-[128px] grid grid-cols-2 gap-1 py-3 px-6 absolute top-[15%] right-[10%] sm:top-0 sm:right-0">
          <div className="item">
            <img src="../images/azm.png" alt="azm" />
          </div>
          <div className="item">
            <img src="../images/stech.png" alt="stech" />
          </div>
          <div className="item bg-[#fff] rounded-bl-[20px]">
            <img src="../images/pickdevs.png" alt="pickdevs" />
          </div>
          <div className="item bg-[#fff] rounded-br-[20px] ">
            <img
              src="../images/chopcast.png"
              className=" w-full"
              alt="chopcast"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
