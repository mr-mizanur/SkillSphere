'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink"; // ইমপোর্ট আন-কমেন্ট করা হয়েছে
import { authClient } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
  };

  // গুগল সাইন-ইন হ্যান্ডলার
  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/", 
    });
  };

  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-0">
        
        {/* ব্র্যান্ড লোগো */}
        <div className="text-2xl font-bold text-purple-600">
          <Link href="/">SkillSphere</Link>
        </div>

        {/* নেভিগেশন লিঙ্কসমূহ */}
        <ul className="hidden md:flex items-center text-gray-700 gap-6 font-medium">
          <li><NavLink href="/">Home</NavLink></li>
          <li><NavLink href="/courses">Courses</NavLink></li>
          {user && <li><NavLink href="/profile">My Profile</NavLink></li>}
          <li><NavLink href="/about-us">About</NavLink></li>
        </ul>

        {/* ইউজার অ্যাকশন এরিয়া */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <div className="hidden sm:block text-right">
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Online</p>
                <p className="text-sm font-semibold">{user.name}</p>
              </div>
              
              <Link href="/profile">
                <Image 
                  src={user.image || userAvatar} 
                  alt="User avatar" 
                  width={40} 
                  height={40} 
                  className="rounded-full border-2 border-purple-500 p-0.5 object-cover cursor-pointer hover:scale-105 transition-transform"
                />
              </Link>

              <button 
                onClick={handleLogout} 
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex items-center gap-3">
              {/* গুগল সাইন-ইন বাটন */}
              <button 
                onClick={handleGoogleSignin}
                className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all shadow-sm"
              >
                <FcGoogle size={20} />
                <span className="hidden sm:inline">Sign in with Google</span>
                <span className="sm:hidden">Google</span>
              </button>

              <div className="h-6 w-[1px] bg-gray-300 mx-1"></div>

              <Link 
                href="/login" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all shadow-md"
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