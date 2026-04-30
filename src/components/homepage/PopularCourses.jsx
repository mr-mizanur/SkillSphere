import React from 'react';
import Link from 'next/link';

import courses from '@/../courses.json';

const PopularCourses = () => {
   
    const topCourses = [...courses]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        🔥 Popular Courses
                    </h2>
                    <p className="text-gray-600 mt-2">Check out our top-rated courses</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topCourses.map((course) => (
                        <div key={course.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
                         
                            <div className="relative overflow-hidden">
                                <img 
                                    src={course.image} 
                                    alt={course.title} 
                                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-purple-600 shadow-sm">
                                    ⭐ {course.rating}
                                </div>
                            </div>

                            {/* কোর্স কন্টেন্ট */}
                            <div className="p-6">
                                <span className="text-xs font-semibold text-purple-500 uppercase tracking-wider">
                                    {course.category}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 h-14 line-clamp-2">
                                    {course.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Instructor: <span className="font-medium text-gray-800">{course.instructor}</span>
                                </p>
                                
                                <Link 
                                    href={`/course/${course.id}`}
                                    className="block w-full py-3 bg-gray-900 text-white text-center font-bold rounded-xl hover:bg-purple-600 transition-colors"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularCourses;