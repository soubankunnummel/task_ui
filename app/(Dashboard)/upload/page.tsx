"use client";
import Image from "next/image";
import React, { useState } from "react";
import Upload from "@/public/svg/upload.svg";
import xl from "@/public/images/Frame 6875.png";
import Uploads from "@/app/components/Uploads";
import * as XLSX from "xlsx";
import { useForm } from "react-hook-form";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFileUpload = (e: any) => {
    setLoading(false);
    const reader = new FileReader();
    console.log(reader);
    reader.readAsBinaryString(e.file[0]);
    reader.onload = (e) => {
      const data = e.target?.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData:any = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
    };
    if(data){
      setLoading(true)
    }
  };
  return (
    <div className="flex w-full  justify-center items-center flex-col  ">
      <div className="md:w-[596px] w-[328px] md:h-[367px] h-[352px] flex flex-col gap-3 bg-white justify-center items-center rounded-lg">
        <form
          action=""
          onSubmit={handleSubmit(handleFileUpload)}
          className="md:w-[564px] w-[296px] md:h-[258px] h-[258px] rounded-[8px] outline-dotted outline-2 relative"
        >
          <label
            htmlFor="fileInput"
            className=" inset-0 flex justify-center items-center cursor-pointer md:w-[564px] w-[296px] md:h-[258px] h-[258px] rounded-[8px] outline-dotted outline-2 relative mb-2 p-[5%] "
          >
            <input
              type="file"
              accept=".xlsx, .xls"
              id="fileInput"
              {...register("file", { required: true })}
              className="hidden md:w-[564px] w-[296px] md:h-[258px] h-[258px] rounded-[8px] outline-dotted outline-2 relative mb-2 p-[5%] "
            />
            <Image alt="xl" src={xl} />
          </label>
          <div className="flex justify-center items-center">
            {loading ? (
              <input
                type="submit"
                name=""
                className="md:w-[564px] w-[296px] md:h-[56px] h-[46px] bg-primery rounded-[8px]  flex justify-center gap-x-2 items-center"
              />
            ) : (
              <span className="loading loading-spinner  text-accent"></span>
            )}
          </div>
        </form>
      </div>
      <div className="w-full p-3  ">
        <h1 className="text-start text-[24px] text-black ">Uploads</h1>
        <div className="flex justify-center flex-col  items-center">
          <Uploads data={data} />
        </div>
      </div>
    </div>
  );
}
