"use client";

import React from 'react';
import { motion } from "framer-motion";
import { FaShieldAlt, FaUserCheck, FaBookReader, FaCopyright } from 'react-icons/fa';

const TermsPage = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const sections = [
        {
            icon: <FaUserCheck />,
            title: "Acceptance of Terms",
            content: "By accessing and using SkillSphere, you agree to be bound by these Terms and Conditions and all applicable laws and regulations."
        },
        {
            icon: <FaBookReader />,
            title: "Course Access",
            content: "Once enrolled, courses are for your personal, non-commercial use only. Sharing account credentials with others is strictly prohibited."
        },
        {
            icon: <FaCopyright />,
            title: "Intellectual Property",
            content: "All content, including videos, quizzes, and materials, is the property of SkillSphere and its instructors, protected by copyright laws."
        },
        {
            icon: <FaShieldAlt />,
            title: "Privacy & Security",
            content: "Your data security is our priority. We use industry-standard encryption to protect your personal and payment information."
        }
    ];

    return (
        <section className="min-h-screen bg-gray-50 py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                
                {/* হেডার */}
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 italic tracking-tighter">
                        Terms & <span className="text-purple-600">Conditions</span>
                    </h1>
                    <p className="text-gray-500 font-medium">Last Updated: April 30, 2026</p>
                </motion.div>

              
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100"
                >
                    <p className="text-gray-600 mb-10 leading-relaxed">
                        Welcome to SkillSphere. Please read these terms carefully before using our services. These terms govern your use of our platform and the courses provided.
                    </p>

                    <div className="space-y-12">
                        {sections.map((item, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex gap-6"
                            >
                                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 text-2xl shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-500 leading-relaxed">{item.content}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                 
                    <div className="mt-16 pt-10 border-t border-gray-100 text-center">
                        <p className="text-gray-400 text-sm mb-6">
                            If you have any questions regarding these terms, please contact our support team.
                        </p>
                        <button className="bg-gray-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-purple-600 transition-all shadow-lg">
                            I Understand & Agree
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TermsPage;