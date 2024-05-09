import React from "react";

export default function Uploads() {
  return (
    <div className=" md:w-full md:overflow-x-hidden overflow-x-scroll w-[312px] h-[419px] mt-[46px] bg-[#F5F5F5] rounded-[8px] p-5  ">
      <table className="table ">
        <thead>
          <tr className="border-b-0 text-black flex justify-between items-center  ">
            <th className="">SI No.</th>
            <th className="">Links</th>
            <th className="">Prefix</th>
            <th className="">Add Tags</th>
            <th className="">Selected Tags</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-0 border-t  bg-white h-[58px] rounded-[12px] flex justify-between mb-3   items-center ">
            <th>1</th>
            <th>Links</th>
            <th>Prefix</th>
            <th>
              <select className="select select-bordered bg-transparent max-w-xs">
                <option disabled selected>
                  Select Tags
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </th>
            <th className="  w-[100px] flex justify-center items-center gap-2 relative ">
              <div className="rounded-[4px] p-2 bg-primery text-white w-[80px] h-[30px] flex justify-between absolute ">
                TAG 1
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-4 h-4 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>
             
               
             
              
              
            </th>
          </tr>
          <tr className="border-b-0 border-t  bg-white h-[58px] rounded-[12px] flex justify-between   items-center ">
            <th>1</th>
            <th>Links</th>
            <th>Prefix</th>
            <th>
              <select className="select select-bordered bg-transparent max-w-xs">
                <option disabled selected>
                  Select Tags
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </th>
            <th>
              <div className="rounded-[4px] gap-2 bg-primery text-white w-[60px] h-[30px] flex justify-center items-center">
                info
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-4 h-4 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
