'use client'
import React from "react";
import DashBord from "./sideBar/DashBord";
import Link from "next/link";
import Uploads from "./sideBar/Uploads";
import Invice from "./sideBar/Invice";
import Schedule from "./sideBar/Schedule";
import Calender from "./sideBar/Calender";
import Notification from "./sideBar/Notification";
import Setings from "./sideBar/Setings";
import Logo from "@/public/images/Logo and company.png";
import Image from "next/image";


interface DroyerProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const Droyer: React.FC<DroyerProps> = ({ isOpen, toggleDrawer }) => {
  return (
    <div className={`drawer ${isOpen ? "open" : ""}`}>
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={isOpen}
        onChange={toggleDrawer} 
      />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className=" btn-primary drawer-button">
     
        </label>
      </div>
      <div className="drawer-side z-30">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-white rounded-r-xl text-base-content">
          {/* Sidebar content here */}
    <div className="bg-white   md:hidden flex flex-col  items-start gap-4 h-screen  w-[218px] p-3  ">
    <div>
        <Image alt="Log&Compuny" src={Logo} />
      </div>

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
        </ul>
      </div>
    </div>
  );
}
export default Droyer