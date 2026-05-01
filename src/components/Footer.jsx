"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    
            
                    <div className="space-y-4">
                        <Link href="/" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 tracking-tighter">
                            SkillSphere
                        </Link>
                        <p className="text-gray-400 leading-relaxed mt-4">
                            Empowering learners worldwide with premium quality courses and industry-leading mentors. Start your journey today.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <motion.a whileHover={{ y: -5 }} href="#" className="hover:text-purple-500 transition-colors"><FaFacebook size={24} /></motion.a>
                            <motion.a whileHover={{ y: -5 }} href="#" className="hover:text-purple-500 transition-colors"><FaTwitter size={24} /></motion.a>
                            <motion.a whileHover={{ y: -5 }} href="#" className="hover:text-purple-500 transition-colors"><FaGithub size={24} /></motion.a>
                            <motion.a whileHover={{ y: -5 }} href="#" className="hover:text-purple-500 transition-colors"><FaLinkedin size={24} /></motion.a>
                        </div>
                    </div>

                
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="hover:text-purple-400 transition-colors">Home</Link></li>
                            <li><Link href="/courses" className="hover:text-purple-400 transition-colors">All Courses</Link></li>
                            <li><Link href="/about-us" className="hover:text-purple-400 transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-purple-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* স্টুডেন্ট পোর্টাল */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Student Resources</h4>
                        <ul className="space-y-4">
                            <li><Link href="/my-profile" className="hover:text-purple-400 transition-colors">My Profile</Link></li>
                            <li><Link href="/my-profile/update" className="hover:text-purple-400 transition-colors">Update Profile</Link></li>
                            <li><Link href="/support" className="hover:text-purple-400 transition-colors">Help Center</Link></li>
                            <li><Link href="/terms" className="hover:text-purple-400 transition-colors">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    {/* নিউজলেটার */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Stay Updated</h4>
                        <p className="text-gray-400 mb-4">Subscribe to our newsletter for latest course updates.</p>
                        <form className="flex flex-col gap-3">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                            />
                            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-purple-900/20">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

               
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} SkillSphere. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/cookies" className="hover:text-white transition-colors">Cookie Settings</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;