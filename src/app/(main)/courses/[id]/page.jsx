"use client";
import React, { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import courses from '@/../courses.json'; 

const CourseDetailsPage = () => {
    const router = useRouter();
    const { id } = useParams();
    
   
    const user = true; /


    const course = courses.find(c => c.id === parseInt(id));

  
    useEffect(() => {
        if (!user) {
           
            router.push(`/login?redirect=/course/${id}`);
        }
    }, [user, id, router]);

    if (!user) {
        return <div className="min-h-screen flex items-center justify-center">Redirecting to login...</div>;
    }

    if (!course) {
        return <div className="min-h-screen flex items-center justify-center text-2xl font-bold">Course not found!</div>;
    }

    return (
        <section className="py-16 bg-white min-h-screen">
            <div className="container mx-auto px-4 max-w-5xl">
                
               
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <img 
                        src={course.image} 
                        alt={course.title} 
                        className="rounded-3xl shadow-2xl w-full object-cover h-[400px]"
                    />
                    <div>
                        <span className="px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-bold uppercase tracking-wider">
                            {course.category}
                        </span>
                        <h1 className="text-4xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight">
                            {course.title}
                        </h1>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            {course.description}
                        </p>
                        <div className="flex items-center gap-6 text-gray-700">
                            <div>
                                <p className="text-sm text-gray-400">Instructor</p>
                                <p className="font-bold">{course.instructor}</p>
                            </div>
                            <div className="h-10 w-[1px] bg-gray-200"></div>
                            <div>
                                <p className="text-sm text-gray-400">Duration</p>
                                <p className="font-bold">{course.duration}</p>
                            </div>
                            <div className="h-10 w-[1px] bg-gray-200"></div>
                            <div>
                                <p className="text-sm text-gray-400">Rating</p>
                                <p className="font-bold text-yellow-500">⭐ {course.rating}</p>
                            </div>
                        </div>
                    </div>
                </div>

           
                <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-100">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Course Curriculum</h2>
                    <div className="space-y-4">
                        {[
                            "Module 1: Introduction & Fundamentals",
                            "Module 2: Core Concepts & Deep Dive",
                            "Module 3: Hands-on Practical Projects",
                            "Module 4: Advanced Industry Standards",
                            "Module 5: Final Assessment & Certification"
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                                <span className="w-10 h-10 flex items-center justify-center bg-purple-600 text-white rounded-full font-bold text-sm">
                                    0{index + 1}
                                </span>
                                <p className="font-semibold text-gray-800">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CourseDetailsPage;