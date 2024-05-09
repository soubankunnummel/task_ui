'use client'
import React, { useState } from "react";
import {usePathname} from 'next/navigation'



export default function DashBord() {
  const pathname = usePathname()
  const isActive = pathname === "/"
  return (
    <>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.53991 0H5.91991C7.32991 0 8.45991 1.15 8.45991 2.561V5.97C8.45991 7.39 7.32991 8.53 5.91991 8.53H2.53991C1.13991 8.53 -9.15527e-05 7.39 -9.15527e-05 5.97V2.561C-9.15527e-05 1.15 1.13991 0 2.53991 0ZM2.53991 11.4697H5.91991C7.32991 11.4697 8.45991 12.6107 8.45991 14.0307V17.4397C8.45991 18.8497 7.32991 19.9997 5.91991 19.9997H2.53991C1.13991 19.9997 -9.15527e-05 18.8497 -9.15527e-05 17.4397V14.0307C-9.15527e-05 12.6107 1.13991 11.4697 2.53991 11.4697ZM17.46 0H14.08C12.67 0 11.54 1.15 11.54 2.561V5.97C11.54 7.39 12.67 8.53 14.08 8.53H17.46C18.86 8.53 20 7.39 20 5.97V2.561C20 1.15 18.86 0 17.46 0ZM14.08 11.4697H17.46C18.86 11.4697 20 12.6107 20 14.0307V17.4397C20 18.8497 18.86 19.9997 17.46 19.9997H14.08C12.67 19.9997 11.54 18.8497 11.54 17.4397V14.0307C11.54 12.6107 12.67 11.4697 14.08 11.4697Z"
          fill={isActive ? "#605BFF" : "#9A9AA9"}
        />
      </svg>

      <h2 className={`ml-2 ${isActive ? "text-primery" : ""} `}>Dashboard</h2>
      </>
  );
}