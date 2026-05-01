'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink"; 
import { authClient } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";
import { HiMenuAlt3, HiX } from "react-icons/hi"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
  };

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/", 
    });
  };

  return (
    <nav className="border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-0">
        
     
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 tracking-tighter">
          <Link href="/">SkillSphere</Link>
        </div>

     
        <ul className="hidden md:flex items-center text-gray-700 gap-8 font-semibold">
          <li><NavLink href="/">Home</NavLink></li>
          <li><NavLink href="/courses">Courses</NavLink></li>
          
          {user && (
            <>
              <li><NavLink href="/my-profile">My Profile</NavLink></li>
              <li><NavLink href="/my-profile/update">Update Info</NavLink></li>
            </>
          )}
          
          <li><NavLink href="/about-us">About</NavLink></li>
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <div className="text-right">
                  <p className="text-[10px] text-green-500 font-bold uppercase tracking-widest">Online</p>
                  <p className="text-sm font-bold text-gray-800">{user.name}</p>
                </div>
                <Link href="/my-profile">
                  <Image 
                    src={user.image || userAvatar} 
                    alt="User avatar" 
                    width={40} 
                    height={40} 
                    className="rounded-full border-2 border-purple-500 p-0.5 object-cover cursor-pointer"
                  />
                </Link>
                <button onClick={handleLogout} className="bg-gray-100 text-red-500 px-4 py-2 rounded-xl text-sm font-bold">
                  Logout
                </button>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <button onClick={handleGoogleSignin} className="flex items-center gap-2 border px-4 py-2 rounded-xl text-sm font-bold">
                  <FcGoogle size={20} />
                  <span className="hidden lg:inline text-gray-700">Google</span>
                </button>
                <Link href="/login" className="bg-purple-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold">
                  Login
                </Link>
              </div>
            )}
          </div>

     
          <button 
            className="md:hidden text-gray-700 focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
          </button>
        </div>
      </div>

  
      <div className={`md:hidden fixed inset-0 bg-white z-40 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)}><HiX size={30} /></button>
          </div>

          <ul className="flex flex-col gap-6 mt-10 text-xl font-bold text-gray-800">
            <li onClick={() => setIsOpen(false)}><Link href="/">Home</Link></li>
            <li onClick={() => setIsOpen(false)}><Link href="/courses">Courses</Link></li>
            
            {user ? (
              <>
                <li onClick={() => setIsOpen(false)}><Link href="/my-profile">My Profile</Link></li>
                <li onClick={() => setIsOpen(false)} className="text-red-500" role="button" onClick={handleLogout}>Logout</li>
              </>
            ) : (
              <li onClick={() => setIsOpen(false)}>
                <Link href="/login" className="bg-purple-600 text-white px-6 py-3 rounded-xl block text-center">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;