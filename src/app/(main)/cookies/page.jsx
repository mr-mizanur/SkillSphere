"use client";

import React from 'react';
import { motion } from "framer-motion";
import { FaCookieBite, FaInfoCircle, FaCog, FaShieldAlt } from 'react-icons/fa';

const CookiePolicy = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const cookieTypes = [
        {
            icon: <FaShieldAlt />,
            title: "Essential Cookies",
            content: "These are necessary for the website to function. They enable basic features like page navigation and access to secure areas of the site."
        },
        {
            icon: <FaCog />,
            title: "Preference Cookies",
            content: "These allow us to remember your settings, such as your preferred language or the region you are in, to provide a more personalized experience."
        },
        {
            icon: <FaInfoCircle />,
            title: "Analytics Cookies",
            content: "We use these to understand how visitors interact with our website by collecting and reporting information anonymously."
        }
    ];

    return (
        <section className="min-h-screen bg-gray-50 py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                
             
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    <div className="inline-block p-4 bg-yellow-100 rounded-3xl text-yellow-600 mb-6 shadow-sm">
                        <FaCookieBite size={36} />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 italic tracking-tighter">
                        Cookie <span className="text-purple-600">Policy</span>
                    </h1>
                    <p className="text-gray-500 font-medium italic">How we use cookies to improve your learning experience.</p>
                </motion.div>

   
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100"
                >
                    <div className="prose prose-purple max-w-none mb-12">
                        <p className="text-gray-600 leading-relaxed text-lg">
                            At <strong>SkillSphere</strong>, we believe in being clear and open about how we collect and use data related to you. This policy provides detailed information about how and when we use cookies on our platform.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                        {cookieTypes.map((cookie, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col md:flex-row gap-6 p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:border-purple-200 transition-all"
                            >
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-purple-600 text-2xl shrink-0 shadow-sm">
                                    {cookie.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{cookie.title}</h3>
                                    <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                                        {cookie.content}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                  
                    <div className="mt-16 pt-10 border-t border-gray-100">
                        <h2 className="text-2xl font-black text-gray-900 mb-6 italic">Managing Your Cookies</h2>
                        <p className="text-gray-600 mb-8">
                            Most browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-900 transition-all shadow-lg shadow-purple-200">
                                Accept All Cookies
                            </button>
                            <button className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-bold hover:border-purple-600 hover:text-purple-600 transition-all">
                                Cookie Settings
                            </button>
                        </div>
                    </div>

                    <p className="mt-12 text-center text-sm text-gray-400 font-medium">
                        Last Updated: April 30, 2026
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default CookiePolicy;