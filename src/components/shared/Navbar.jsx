'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink"; 
import { authClient } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";

const Navbar = () => {
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
        
       
        <div className="text-2xl font-black text-purple-600 tracking-tighter">
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
          {user ? (
            <>
              <div className="hidden sm:block text-right">
                <p className="text-[10px] text-green-500 font-bold uppercase tracking-widest">Online</p>
                <p className="text-sm font-bold text-gray-800">{user.name}</p>
              </div>
              
              <Link href="/my-profile">
                <Image 
                  src={user.image || userAvatar} 
                  alt="User avatar" 
                  width={40} 
                  height={40} 
                  className="rounded-full border-2 border-purple-500 p-0.5 object-cover cursor-pointer hover:rotate-6 transition-all"
                />
              </Link>

              <button 
                onClick={handleLogout} 
                className="bg-gray-100 hover:bg-red-50 text-red-500 px-4 py-2 rounded-xl text-sm font-bold transition-all border border-transparent hover:border-red-200"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <button 
                onClick={handleGoogleSignin}
                className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-xl text-sm font-bold hover:bg-gray-50 transition-all"
              >
                <FcGoogle size={20} />
                <span className="hidden lg:inline text-gray-700">Google</span>
              </button>

              <Link 
                href="/login" 
                className="bg-purple-600 hover:bg-gray-900 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-purple-200"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;