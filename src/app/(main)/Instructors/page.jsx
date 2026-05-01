"use client";

import React from 'react';
import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';

const TopInstructors = () => {
    const instructors = [
        {
            name: "Dr. Sarah Johnson",
            role: "Senior AI Researcher",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
            bio: "Expert in Machine Learning and Neural Networks with 10+ years of experience."
        },
        {
            name: "Mizanur Rahman",
            role: "Frontend Architect",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
            bio: "Specializing in high-performance digital interfaces and modern UI design."
        },
        {
            name: "Alex Rivaz",
            role: "Full Stack Developer",
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
            bio: "MERN stack specialist and lead contributor to multiple open-source projects."
        },
        {
            name: "Jessica Chen",
            role: "UX Design Lead",
            img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
            bio: "Designing human-centric experiences for Fortune 500 tech companies."
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter italic"> World-Class Mentors</h2>
                        <p className="text-gray-500 mt-4 text-lg">Learn from industry experts who are shaping the future.</p>
                    </div>
                    <button className="px-8 py-3 border-2 border-gray-900 font-bold rounded-2xl hover:bg-gray-900 hover:text-white transition-all">
                        View All Mentors
                    </button>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {instructors.map((person, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group"
                        >
                            <div className="relative mb-6 overflow-hidden rounded-[2.5rem]">
                                <img 
                                    src={person.img} 
                                    alt={person.name} 
                                    className="w-full h-[350px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-8">
                                    <div className="flex gap-4">
                                        <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-purple-600 transition-all"><FaLinkedinIn /></a>
                                        <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-purple-600 transition-all"><FaTwitter /></a>
                                        <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-purple-600 transition-all"><FaGithub /></a>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 italic tracking-tight">{person.name}</h3>
                            <p className="text-purple-600 font-bold text-sm uppercase tracking-widest mt-1">{person.role}</p>
                            <p className="text-gray-500 mt-4 text-sm leading-relaxed line-clamp-2">{person.bio}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopInstructors;