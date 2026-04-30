import React from 'react';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="relative bg-white py-16 lg:py-24">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
                
                {/* বাম পাশের কন্টেন্ট */}
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                        Unlock Your Potential with <span className="text-purple-600">SkillSphere</span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-600 max-w-2xl">
                        Master the most in-demand skills with our expert-led courses. From Web Development to Data Science, start your journey today and shape your future.
                    </p>
                    
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link 
                            href="/courses" 
                            className="px-8 py-4 bg-purple-600 text-white font-bold rounded-xl shadow-lg hover:bg-purple-700 transition-all transform hover:-translate-y-1 text-center"
                        >
                            Explore Courses
                        </Link>
                        <Link 
                            href="/register" 
                            className="px-8 py-4 border-2 border-purple-600 text-purple-600 font-bold rounded-xl hover:bg-purple-50 transition-all text-center"
                        >
                            Join for Free
                        </Link>
                    </div>

                    {/* কিছু স্ট্যাটাস বা ট্রাস্ট ব্যাজ */}
                    <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-gray-500 text-sm">
                        <div className="flex flex-col">
                            <span className="font-bold text-gray-900 text-xl">10K+</span>
                            <span>Students</span>
                        </div>
                        <div className="h-8 w-[1px] bg-gray-300"></div>
                        <div className="flex flex-col">
                            <span className="font-bold text-gray-900 text-xl">50+</span>
                            <span>Expert Mentors</span>
                        </div>
                        <div className="h-8 w-[1px] bg-gray-300"></div>
                        <div className="flex flex-col">
                            <span className="font-bold text-gray-900 text-xl">4.9/5</span>
                            <span>Rating</span>
                        </div>
                    </div>
                </div>

                {/* ডান পাশের ইমেজ বা গ্রাফিক্স */}
                <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
                    <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    
                    <div className="relative">
                        <img 
                            src="https://img.freepik.com/free-vector/online-learning-concept-illustration_114360-1105.jpg" 
                            alt="Learning Illustration" 
                            className="rounded-2xl shadow-2xl relative z-10"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;