import Image from "next/image";
import React from "react";
import Google from "@/public/svg/google.svg";
import Apple from "@/public/svg/apple.svg";
import Logo from "@/public/svg/logo.svg";
import Git from "@/public/svg/socilmedias/git.svg";
import Twitter from "@/public/svg/socilmedias/twitter.svg";
import Discode from "@/public/svg/socilmedias/discode.svg";
import Linkdin from "@/public/svg/socilmedias/linkdin.svg";
import Left from "@/public/images/Left side.png";
import Link from "next/link";
import LogoandCompany from '@/public/images/Logo and company (4).png'
// import LogoandCompany from '@/public/images/Logo and company (2).png'

export default function page() {
  return (
    <div className=" w-full h-screen flex md:flex-row flex-col bg-secondery ">
      <div className="relative  h-full hidden md:flex ">
        <Image alt="left" src={Left} className="h-full object-cover " />

        <div className="grid grid-cols-6 grid-rows-4 justify-between gap-4 top-0 p-[3%] left-0 absolute">
          <div className="w-[80.15px] h-[80.15px] rounded-full bg-secondery flex justify-center items-center ">
            <Image src={Logo} alt="Logo" />
          </div>
          <div className="col-start-2 row-start-6">
            <Image alt="soiclmedia_icons" src={Git} />{" "}
          </div>
          <div className="col-start-3 row-start-6">
            <Image alt="soiclmedia_icons" src={Twitter} />
          </div>
          <div className="col-start-4 row-start-6">
            <Image alt="soiclmedia_icons" src={Linkdin} />
          </div>
          <div className="col-start-5 row-start-6">
            <Image alt="soiclmedia_icons" src={Discode} />
          </div>
          <div className="col-span-2 col-start-3 row-start-3 text-[59px] font-Montserrat font-bold text-secondery ">
            BASE{" "}
          </div>
        </div>
      </div>
      <div className="w-full h-[80px] md:hidden flex bg-primery  p-3 ">
            <Image src={LogoandCompany} alt="Logo" className=""/>
      </div>
      <div className=" flex-col justify-center md:p-0 p-4 ">
        <div className="grid  grid-rows gap-4">
          <div className="text-[36px] font-Montserrat text-black font-bold">Sign In</div>
          <div className="row-start-2 text-[16px] font-Lato text-black whitespace-no-wrap">
            Sign in to your account
          </div>
          <div className="col-span-2 row-start-3">
            <Image src={Google} alt="Google" />
          </div>
          <div className="col-span-2 col-start-3 row-start-3">
            <Image src={Apple} alt="Apple" />
          </div>
        </div>
        <div className="md:w-[422.64px] w-full rounded-[20px] h-[347.99px] border mt-[27.44px] shadow-lg">
          <form
            action=""
            className="flex flex-col py-6 p-4 justify-center  gap-4 "
          >
            <label htmlFor="" className="text-black">
              Email address
            </label>
            <input
              type="text"
              name=""
              id=""
              className="md:h-[43.91px]  w-full rounded-xl bg-[#EAEAEA] p-4"
            />
            <label htmlFor="" className="text-black">
              Password
            </label>
            <input
              type="password"
              name=""
              id=""
              className="md:h-[43.91px]  w-full rounded-xl bg-[#EAEAEA] p-4"
            />
            <span>Forgot Password ?</span>
            <Link href={'/'}>
            <input
              type="submit"
              name=""
              id=""
              className="w-full h-[43.91px] text-white bg-primery rounded-xl "
            />
            </Link>
          </form>
        </div>
        <h3 className="mt-1">
          Don&apos;t have an account?
          <span className="text-[#346BD4]  "> Register here</span>
        </h3>
      </div>
    </div>
  );
}
