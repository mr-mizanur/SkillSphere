"use client";

import React from 'react';
import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaGithub, FaStar, FaUserGraduate } from 'react-icons/fa';
import Link from 'next/link';

const MentorsPage = () => {
    // মেন্টরদের ডাটা লিস্ট
    const mentors = [
        {
            id: 1,
            name: "Mizanur Rahman",
            role: "Frontend Architect & UI Specialist",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
            bio: "Professional web developer specializing in high-performance digital interfaces and modern UI architecture.",
            rating: 4.9,
            students: "2.5k+",
            courses: 12
        },
        {
            id: 2,
            name: "Dr. Sarah Johnson",
            role: "Full Stack Developer",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
            bio: "Expert in MERN stack and cloud computing with over 8 years of industry experience teaching thousands of students.",
            rating: 5.0,
            students: "5k+",
            courses: 8
        },
        {
            id: 3,
            name: "Alex Rivaz",
            role: "Backend Engineer",
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
            bio: "Specialist in scalable backend systems, database optimization, and secure API development.",
            rating: 4.8,
            students: "1.8k+",
            courses: 5
        },
        {
            id: 4,
            name: "Jessica Chen",
            role: "UX/UI Design Lead",
            img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
            bio: "Award-winning designer focused on human-centric design and building intuitive digital products.",
            rating: 4.9,
            students: "3.2k+",
            courses: 10
        }
    ];

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                
                {/* হেডার সেকশন */}
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter italic">
                        Our Expert <span className="text-purple-600">Mentors</span>
                    </h1>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
                        Learn from world-class professionals who are dedicated to helping you master the most in-demand skills in the industry.
                    </p>
                </motion.div>

                {/* মেন্টর কার্ডস গ্রিড */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {mentors.map((mentor, index) => (
                        <motion.div 
                            key={mentor.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-6 md:p-10 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col md:flex-row gap-8 items-center group"
                        >
                            {/* মেন্টর ইমেজ */}
                            <div className="relative shrink-0">
                                <div className="w-48 h-48 rounded-[2.5rem] overflow-hidden">
                                    <img 
                                        src={mentor.img} 
                                        alt={mentor.name} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="absolute -bottom-4 -right-4 bg-purple-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg border-4 border-white">
                                    <FaUserGraduate />
                                </div>
                            </div>

                            {/* মেন্টর কন্টেন্ট */}
                            <div className="flex-grow text-center md:text-left">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-2xl font-black text-gray-900 italic tracking-tight">{mentor.name}</h3>
                                        <p className="text-purple-600 font-bold text-sm uppercase tracking-widest">{mentor.role}</p>
                                    </div>
                                    <div className="flex items-center justify-center gap-1 bg-yellow-50 px-3 py-1 rounded-xl">
                                        <FaStar className="text-yellow-500 text-sm" />
                                        <span className="font-black text-gray-900 text-sm">{mentor.rating}</span>
                                    </div>
                                </div>

                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    {mentor.bio}
                                </p>

                                {/* স্ট্যাটস এবং সোশ্যাল */}
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-50">
                                    <div className="flex gap-6">
                                        <div className="text-center md:text-left">
                                            <p className="text-gray-900 font-black text-lg">{mentor.students}</p>
                                            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Students</p>
                                        </div>
                                        <div className="text-center md:text-left">
                                            <p className="text-gray-900 font-black text-lg">{mentor.courses}</p>
                                            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Courses</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex gap-3">
                                        <a href="#" className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all"><FaLinkedinIn /></a>
                                        <a href="#" className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all"><FaTwitter /></a>
                                        <a href="#" className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all"><FaGithub /></a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

              
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mt-24 bg-gray-900 p-12 md:p-20 rounded-[4rem] text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600 rounded-full blur-[120px] opacity-20"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 italic">Want to become a mentor?</h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
                            Share your knowledge with the world and help students achieve their dreams. Join our elite community of instructors today.
                        </p>
                        <Link href='/register' className="bg-purple-600 text-white px-12 py-5 rounded-2xl font-black hover:bg-white hover:text-gray-900 transition-all shadow-xl shadow-purple-500/20 active:scale-95">
                            Join SkillSphere Team
                        </Link>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default MentorsPage;