"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const MenuOption = ({ icon, text, path }) => {
  const pathname = usePathname();

  return (
    <Link
      href={`${path}`}
      className={`w-full 
        ${pathname === path ? " border-primary bg-indigo-100" : "border-white"}
        flex flex-row p-2 text-black gap-2 border-l-4
      `}
     
    >
      <div className="icon-container ml-[40px] mr-1">
        <Image src={`/${icon}.svg`} priority height={20} width={20} alt="menu-option" />
      </div>
      <div className="heading-container text-black font-roboto text-[13px] font-bold">
        <h2>{text}</h2>
      </div>
    </Link>
  );
};

export default MenuOption;

