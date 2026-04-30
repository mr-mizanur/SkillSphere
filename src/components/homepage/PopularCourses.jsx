"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import courses from '@/../courses.json';

const PopularCourses = () => {
   
   
    const topCourses = [...courses]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

  
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2 
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 italic tracking-tight">
                         Popular Courses
                    </h2>
                    <div className="w-24 h-1.5 bg-purple-600 mx-auto mt-4 rounded-full"></div>
                    <p className="text-gray-600 mt-4 text-lg">Handpicked top-rated courses just for you</p>
                </motion.div>

               
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {topCourses.map((course) => (
                        <motion.div 
                            key={course.id} 
                            variants={cardVariants}
                            whileHover={{ y: -12 }} 
                            className="bg-white rounded-[2rem] shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-100 overflow-hidden group"
                        >
                         
                            <div className="relative overflow-hidden">
                                <motion.img 
                                    src={course.image} 
                                    alt={course.title} 
                                    className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                
                                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-2xl text-sm font-black text-purple-600 shadow-lg border border-white/20">
                                    ⭐ {course.rating}
                                </div>
                                <div className="absolute bottom-4 left-4">
                                    <span className="bg-purple-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-lg">
                                        Best Seller
                                    </span>
                                </div>
                            </div>

                        
                            <div className="p-8">
                                <span className="text-xs font-bold text-purple-500 uppercase tracking-widest">
                                    {course.category}
                                </span>
                                <h3 className="text-xl font-black text-gray-900 mt-2 mb-4 h-14 line-clamp-2 leading-snug">
                                    {course.title}
                                </h3>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                                        {course.instructor.charAt(0)}
                                    </div>
                                    <p className="text-gray-500 text-sm">
                                        By <span className="font-bold text-gray-800">{course.instructor}</span>
                                    </p>
                                </div>
                                
                                <Link 
                                    href={`/courses/${course.id}`}
                                    className="block w-full py-4 bg-gray-900 text-white text-center font-bold rounded-2xl hover:bg-purple-600 transform active:scale-95 transition-all duration-300 shadow-lg hover:shadow-purple-200"
                                >
                                    View Details
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PopularCourses;