"use client";
import Image from "next/image";
import React, { useState } from "react";
import Upload from "@/public/svg/upload.svg";
import xl from "@/public/images/Frame 6875.png";
import Uploads from "@/app/components/Uploads";

export default function Page() {
  const [loading, setLoading] = useState(true);
  return (
    <div className="flex h-full  justify-center items-center flex-col">
      <div className="md:w-[596px] w-[328px] md:h-[367px] h-[352px] flex flex-col gap-3 bg-white justify-center items-center rounded-lg">
        <div className="md:w-[564px] w-[296px] md:h-[258px] h-[258px] rounded-[8px] outline-dotted outline-2 relative">
          <label
            htmlFor="fileInput"
            className="absolute inset-0 flex justify-center items-center cursor-pointer"
          >
            <input type="file" id="fileInput" accept="" className="hidden" />
            <Image alt="xl" src={xl} />
          </label>
        </div>
        <button
          className="md:w-[564px] w-[296px] md:h-[56px] h-[46px] bg-primery rounded-[8px] flex justify-center gap-x-2 items-center"
          onClick={() => setLoading(false)}
        >
          {loading ? (
            <Image alt="upload_icon" src={Upload} />
          ) : (
            <span className="loading loading-spinner text-white"></span>
          )}
          Upload
        </button>
      </div>
      <div className="w-full p-3  ">
      <h1 className="text-start text-[24px] text-black ">Uploads</h1>
      <div className="flex justify-center flex-col  items-center">

       <Uploads/>
      </div>
      </div>
    </div>
  );
}
