"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="relative bg-white py-16 lg:py-28 overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-16">
               
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex-1 text-center lg:text-left z-10"
                >
                    <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 mb-6 rounded-full bg-purple-50 border border-purple-100">
                        <span className="text-purple-600 text-sm font-bold tracking-wide uppercase"> Next Generation Learning</span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] tracking-tighter">
                        Unlock Your Potential with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">SkillSphere</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="mt-8 text-xl text-gray-600 max-w-2xl leading-relaxed">
                        Master the most in-demand skills with our expert-led courses. From Web Development to Data Science, start your journey today and shape your future.
                    </motion.p>
                    
                    <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                        <Link 
                            href="/courses" 
                            className="px-10 py-5 bg-gray-900 text-white font-bold rounded-2xl shadow-2xl hover:bg-purple-600 transition-all transform hover:-translate-y-1.5 text-center"
                        >
                            Explore Courses
                        </Link>
                        <Link 
                            href="/register" 
                            className="px-10 py-5 border-2 border-gray-200 text-gray-900 font-bold rounded-2xl hover:border-purple-600 hover:text-purple-600 transition-all text-center"
                        >
                            Join for Free
                        </Link>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-12 flex items-center justify-center lg:justify-start gap-10">
                        <div className="flex flex-col">
                            <span className="font-black text-gray-900 text-3xl">10K+</span>
                            <span className="text-gray-500 font-medium">Students</span>
                        </div>
                        <div className="h-12 w-[1px] bg-gray-200"></div>
                        <div className="flex flex-col">
                            <span className="font-black text-gray-900 text-3xl">50+</span>
                            <span className="text-gray-500 font-medium">Mentors</span>
                        </div>
                        <div className="h-12 w-[1px] bg-gray-200"></div>
                        <div className="flex flex-col">
                            <span className="font-black text-gray-900 text-3xl">4.9/5</span>
                            <span className="text-gray-500 font-medium">Rating</span>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 relative w-full max-w-xl lg:max-w-none"
                >
                    <div className="absolute top-0 -left-10 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-pulse"></div>
                    <div className="absolute bottom-0 -right-10 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-pulse delay-700"></div>
                    
                    <motion.div 
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10"
                    >
                        <img 
                            src="https://img.freepik.com/free-vector/online-learning-concept-illustration_114360-1105.jpg" 
                            alt="Learning Illustration" 
                            className="rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-8 border-white"
                        />
                        
                        <motion.div 
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="absolute -top-6 -right-6 bg-white p-5 rounded-3xl shadow-xl hidden md:block"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 text-2xl">🏆</div>
                                <div>
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-tighter">Best Platform</p>
                                    <p className="font-black text-gray-900">Award 2026</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;