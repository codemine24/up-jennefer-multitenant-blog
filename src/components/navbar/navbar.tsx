"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  const router = useRouter();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full dark:bg-neutral-900 px-[10px] py-[8px] sticky top-0 z-50 border-b border-neutral-600">
      {/* logo */}
      <h1
        className="text-[1.5rem] font-semibold cursor-pointer"
        onClick={() => router.push("/")}
      >
        Jennefer Multitenant Blog
      </h1>

      {/* nav links */}
      <ul className="items-center gap-[20px] text-[1rem] md:flex hidden">
        <Button onClick={() => router.push("/tenet")} className="hover:underline">Continue as Tenant</Button>
        <Button onClick={() => router.push("/admin")} className="hover:underline">Continue as Admin</Button>
      </ul>

      {/* mobile sidebar */}
      <aside
        className={` ${mobileSidebarOpen
          ? "translate-x-0 opacity-100 z-20"
          : "translate-x-[200px] opacity-0 z-[-1]"
          } md:hidden bg-white p-4 text-center absolute top-[65px] dark:bg-slate-700 right-0 w-full sm:w-[50%] rounded-md transition-all duration-300`}
      >
        <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">
          <li
            className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize"
            onClick={() => router.push("/tenet")}
          >
            Continue as Tenant
          </li>

          <li
            className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize"
            onClick={() => router.push("/admin")}
          >
            Continue as Admin
          </li>
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
