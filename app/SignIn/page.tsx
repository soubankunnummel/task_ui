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

export default function page() {
  return (
    // <div className="w-full h-screen bg-secondery ">
    //   {/* <div className="bg-primery w-[719.99px] h-full flex justify-between p-[3%] ">
    //     <div className=" ">
    //       <div className="grid grid-cols-6 grid-rows-7 gap-4">
    //         <div className="w-[80.15px] h-[80.15px] rounded-full bg-secondery flex justify-center items-center ">
    //         <Image src={Logo} alt="Logo" />
    //         </div>
    //         <div className="col-start-2 row-start-6"><Image alt="soiclmedia_icons" src={Git}/> </div>
    //         <div className="col-start-3 row-start-6"><Image alt="soiclmedia_icons" src={Twitter}/></div>
    //         <div className="col-start-4 row-start-6"><Image alt="soiclmedia_icons" src={Linkdin}/></div>
    //         <div className="col-start-5 row-start-6"><Image alt="soiclmedia_icons" src={Discode}/></div>
    //         <div className="col-span-2 col-start-3 row-start-3 text-[59px] font-Montserrat font-bold text-secondery ">BASE </div>
    //       </div>
    //     </div>
    //   </div> */}
    //   <div className="" >
    //     <Image alt="login_page" src={Left} className="w-fit"/>
    //   </div>

    //   <div className="flex flex-col justify-center items-center p-[4%]">
    //     {/* <div className="grid  grid-rows-3 gap-4">
    //       <div className="text-[36px] font-Montserrat font-bold">Sign In</div>
    //       <div className="row-start-2 text-[16px] font-Lato whitespace-no-wrap">
    //         Sign in to your account
    //       </div>
    //       <div className="col-span-2 row-start-3">
    //         <Image src={Google} alt="Google" />
    //       </div>
    //       <div className="col-span-2 col-start-3 row-start-3">
    //         <Image src={Apple} alt="Apple" />
    //       </div>
    //     </div> */}
    //     {/* <div className="w-[422.64px] rounded-[20px] h-[347.99px] border mt-[27.44px] shadow-lg"></div> */}
    //   </div>
    // </div>
    <div className="w-full h-full flex bg-secondery ">
      <div className="relative w-[619.99px] h-[114px] ">
        <Image alt="left" src={Left} className="w-full " />

        <div className="grid grid-cols-6 grid-rows-12 justify-between gap-4 top-0 p-[3%] left-0 absolute">
           <div className="w-[80.15px] h-[80.15px] rounded-full bg-secondery flex justify-center items-center ">
           <Image src={Logo} alt="Logo" />
           </div>
           <div className="col-start-2 row-start-6"><Image alt="soiclmedia_icons" src={Git}/> </div>
           <div className="col-start-3 row-start-6"><Image alt="soiclmedia_icons" src={Twitter}/></div>
           <div className="col-start-4 row-start-6"><Image alt="soiclmedia_icons" src={Linkdin}/></div>
           <div className="col-start-5 row-start-6"><Image alt="soiclmedia_icons" src={Discode}/></div>
           <div className="col-span-2 col-start-3 row-start-3 text-[59px] font-Montserrat font-bold text-secondery ">BASE </div>
         </div>
      </div>
      <div className="flex flex-col justify-center  ">
        <div className="grid  grid-rows-3 gap-4">
          <div className="text-[36px] font-Montserrat font-bold">Sign In</div>
          <div className="row-start-2 text-[16px] font-Lato whitespace-no-wrap">
            Sign in to your account
          </div>
          <div className="col-span-2 row-start-3">
            <Image src={Google} alt="Google" />
          </div>
          <div className="col-span-2 col-start-3 row-start-3">
            <Image src={Apple} alt="Apple" />
          </div>
        </div>
        <div className="w-[422.64px] rounded-[20px] h-[347.99px] border mt-[27.44px] shadow-lg"></div>
      </div>
    </div>
  );
}
