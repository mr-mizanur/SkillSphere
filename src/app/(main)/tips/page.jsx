"use client";

import React from 'react';
import { motion } from "framer-motion";
import { FaClock, FaBrain, FaBookOpen, FaLightbulb, FaBook } from 'react-icons/fa';

const LearningTips = () => {
    const tips = [
        {
            icon: <FaBrain className="text-purple-600" />,
            title: "Active Recall",
            desc: " Try to create your own questions and answer them. This is best for long-term memory."
        },
        {
            icon: <FaClock className="text-blue-600" />,
            title: "Pomodoro Technique",
            desc: "Studying for 25 minutes and taking a 5-minute break—this rule helps you maintain focus."
        },
        {
            icon: <FaBookOpen className="text-green-600" />,
            title: "Spaced Repetition",
            desc: " Revise the topics you have studied at regular intervals so that you do not forget them."
        },
        {
            icon: <FaLightbulb className="text-yellow-600" />,
            title: "Feynman Technique",
            desc: " Explain a complex topic to others as if you were explaining it to a small child."
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-black text-gray-900 italic"> Elevate Your Learning</h2>
                    <p className="text-gray-500 mt-4 text-lg">Master these techniques to study smarter, not harder.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tips.map((tip, idx) => (
                        <motion.div 
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all"
                        >
                            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-2xl mb-6">
                                {tip.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{tip.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{tip.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LearningTips;