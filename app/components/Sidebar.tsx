import React from "react";
import Logo from "@/public/images/Logo and company.png";
import Image from "next/image";
import DashBord from "./sideBar/DashBord";
import Uploads from "./sideBar/Uploads";
import Invice from "./sideBar/Invice";
import Schedule from "./sideBar/Schedule";
import Calender from "./sideBar/Calender";
import Setings from "./sideBar/Setings";
import Notification from "./sideBar/Notification";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="bg-white   md:flex hidden flex-col  items-center h-screen  w-[218px] p-3 gap-10 ">
     <Link href={'/'} >
     <div>
        <Image alt="Log&Compuny" src={Logo} />
      </div>
      </Link>
      <div className="flex flex-col gap-y-5">
        <Link href={'/'}>
        <div className="h-[24px] flex items-center gap-2  cursor-pointer ">
          <DashBord />
        </div>
        </Link>
       <Link href={'/upload'}>
       <div className="h-[24px] flex items-center gap-2  cursor-pointer">
          <Uploads />
        </div>
       </Link>
       <Link href={'/Invoice'}>
       <div className="h-[24px] flex items-center gap-2  cursor-pointer">
       <Invice />
        </div>
       </Link>
       <Link href={'/Schedule'}>
       <div className="h-[24px] flex items-center gap-2  cursor-pointer">
       <Schedule />
        </div>
       </Link>
       <Link href={'/Calender'}>
       <div className="h-[24px] flex items-center gap-2  cursor-pointer">
       <Calender />
        </div>
       </Link>
       <Link href={'/Notifiaction'}>
       <div className="h-[24px] flex items-center gap-2  cursor-pointer">
       <Notification />
        </div>
       </Link>
       <Link href={'/Setings'}>
       <div className="h-[24px] flex items-center gap-2  cursor-pointer">
       <Setings />
        </div>
       </Link>
        
      </div>
    </div>
  );
}
