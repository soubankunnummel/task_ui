import React from "react";
import Nave from "../components/Nave";
import Sidebar from "../components/Sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full bg-secondery">
      
      <Sidebar/>
      
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Nave />
        {/* Main Content */}
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
