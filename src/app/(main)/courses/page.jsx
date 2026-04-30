"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from 'react';
import Link from 'next/link';
import courses from '@/../courses.json';

const AllCoursesPage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="py-16 bg-white min-h-screen">
            <div className="container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center lg:text-left"
                >
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                        Explore All Courses
                    </h1>
                    <p className="text-gray-600 mt-3 text-lg">
                        Start learning your favorite subject today with our best courses.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative mb-10 group"
                >
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg 
                            className="h-5 w-5 text-gray-400 group-focus-within:text-purple-600 transition-colors" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search for your favorite courses..." 
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent shadow-sm hover:shadow-md transition-all duration-300"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </motion.div>

                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map((course) => (
                                <motion.div 
                                    layout
                                    key={course.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    whileHover={{ y: -10 }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                                >
                                    <div className="relative overflow-hidden">
                                        <motion.img 
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                            src={course.image} 
                                            alt={course.title} 
                                            className="w-full h-56 object-cover"
                                        />
                                        <div className="absolute top-4 right-4 bg-purple-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg">
                                            {course.level}
                                        </div>
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-xs font-bold text-purple-600 uppercase tracking-widest">
                                                {course.category}
                                            </span>
                                            <span className="text-yellow-500 font-bold text-sm flex items-center gap-1">
                                                ⭐ {course.rating}
                                            </span>
                                        </div>
                                        <h2 className="text-xl font-black text-gray-900 mb-3 h-14 line-clamp-2 leading-tight">
                                            {course.title}
                                        </h2>
                                        <p className="text-gray-500 text-sm mb-6">
                                            By <span className="text-gray-900 font-bold">{course.instructor}</span> • {course.duration}
                                        </p>
                                        
                                        <div className="mt-auto pt-6 border-t border-gray-50">
                                            <Link 
                                                href={`/courses/${course.id}`}
                                                className="block w-full py-4 bg-gray-900 text-white text-center font-bold rounded-2xl hover:bg-purple-600 transition-all shadow-lg hover:shadow-purple-200 active:scale-95"
                                            >
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="col-span-full text-center py-20"
                            >
                                <p className="text-gray-400 text-5xl mb-4">🔍</p>
                                <p className="text-gray-500 text-xl font-bold">No courses found matching "{searchTerm}"</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default AllCoursesPage;