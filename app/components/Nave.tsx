'use client'
import React, { useState } from "react";
import Bell from "@/public/svg/Bell.svg";
import Image1 from "@/public/images/image 1.png";
import Image from "next/image";
import Logo from "@/public/images/Logo and company (2).png";
import Threeline from "@/public/svg/threline.svg";
import Droyer from "./Droyer";
import Link from "next/link";

export default function Nave() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="w-full flex justify-between p-6">
      <div className="flex justify-evenly">
        <div className="md:hidden flex items-center gap-x-3 ">
          <Image alt="Three_Line" src={Threeline} onClick={toggleDrawer} />
          <Image alt="Log&Compuny" src={Logo} />
          <Droyer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        </div>
        <h1 className="hidden md:flex text-[24px] md:text-[19px] font-semibold text-black">
          Upload CSV
        </h1>
      </div>

      <div className="flex w-20 flex-initial items-center justify-between">
        <div>
          <Image alt="bell" src={Bell} />{" "}
        </div>
        <div className="w-[30px] h-[30px] rounded-full ">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="">
              <Image alt="bell" src={Image1} className="rounded-full" />{" "}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-secondery rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
             <li >
             <Link href={'/SignIn'}>
                <span>Log out</span>
             </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}