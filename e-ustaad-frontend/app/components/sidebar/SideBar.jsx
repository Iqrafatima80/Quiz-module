import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navlink from "./Navlink";

const SideBar = () => {
  return (
    <div className=" bg-primary w-20 p-2 flex flex-col items-center text-white sticky top-0 bottom-0 h-screen">
      {/* Branding */}
      <div className="p-2 mt-2">
        <Image src="/logo.svg" priority height={40} width={50} alt="logo" />
      </div>

      {/* Navigation */}
      <div className="mt-20 flex flex-col gap-2 h-full pb-5">
        <Navlink path="/dashboard" />
        <Navlink path="/forums" />
        <Navlink path="/meet" />
        <Navlink path="/messages" />
        <Navlink path="/Quiz" />

        {/* Logout Button */}
        <button className="flex justify-center items-center mt-auto">
          <Image
            src="/logout.svg"
            priority
            height={20}
            width={20}
            alt="logout"
          />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
