'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;


  const handleLogout = async () => {
    await authClient.signOut();
  };


  return (
    <div className="container mx-auto flex justify-between gap-4 mt-6">
      <div>
        {/* ব্র্যান্ড লোগো বা ফাঁকা রাখা হয়েছে আপনার কোড অনুযায়ী */}
      </div>

      <ul className="flex justify-between items-center text-gray-700 gap-3">
        <li><NavLink href={"/"}>Home</NavLink></li>
        <li><NavLink href={"/about-us"}>About</NavLink></li>
        <li>
          <NavLink href={"/career"} className={"text-yellow-500"}>
            Career
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-2">
        {user ? (
          <>
            <div className="text-sm font-medium">
              <h2>Hello, {user.name}</h2>
            </div>
            <Image 
              src={user.image || userAvatar} 
              alt="User avatar" 
              width={40} // সাইজ একটু কমিয়ে ৪০ করা হয়েছে নেভিগেশনের জন্য
              height={40} 
              className="rounded-full object-cover" // গোল দেখানোর জন্য
            />
            <button 
              onClick={handleLogout} 
              className="btn bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Logout
            </button>
          </>
        ) : (
          <button className="btn bg-purple-500 text-white px-4 py-2 rounded-md">
            <Link href="/login">Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;