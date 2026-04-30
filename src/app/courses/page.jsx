"use client"; 


import { motion } from "motion/react";
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
                <div className="mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900">Explore All Courses</h1>
                    <p className="text-gray-600 mt-3 text-lg">Start learning your favorite subject today with our best courses.</p>
                </div>

               
              <div className="relative mb-10 group">

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
</div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                   
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                            <div key={course.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
                           
                                <div className="relative">
                                    <img 
                                        src={course.image} 
                                        alt={course.title} 
                                        className="w-full h-56 object-cover"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-lg">
                                        {course.level}
                                    </div>
                                </div>

                              
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-sm font-medium text-purple-600">{course.category}</span>
                                        <span className="text-yellow-500 font-bold">⭐ {course.rating}</span>
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-2 h-14 line-clamp-2">
                                        {course.title}
                                    </h2>
                                    <p className="text-gray-500 text-sm mb-4">
                                        By <span className="text-gray-800 font-semibold">{course.instructor}</span> • {course.duration}
                                    </p>
                                    
                                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                                        <Link 
                                            href={`/courses/${course.id}`}
                                            className="w-full py-3 bg-purple-600 text-white text-center font-bold rounded-xl hover:bg-gray-900 transition-all"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20">
                            <p className="text-gray-500 text-xl">No courses found matching "{searchTerm}"</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AllCoursesPage;