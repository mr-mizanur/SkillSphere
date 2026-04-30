"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaQuestionCircle, FaRocket, FaUserShield, FaCreditCard, FaChevronDown } from 'react-icons/fa';

const SupportPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const faqs = [
        {
            question: "How do I enroll in a course?",
            answer: "To enroll, simply browse our All Courses page, select a course you like, and click on the 'View Details' button. From there, you can join the course instantly.",
            category: "General"
        },
        {
            question: "Can I access courses on mobile?",
            answer: "Yes! SkillSphere is fully responsive. You can access all your courses and materials on any device, including smartphones and tablets.",
            category: "Technical"
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, and local mobile payment methods through our integrated payment gateway.",
            category: "Billing"
        },
        {
            question: "Is there a certificate after completion?",
            answer: "Absolutely. Once you complete all the lessons and assignments of a course, a digital certificate will be generated in your profile.",
            category: "General"
        }
    ];

    const supportCards = [
        { icon: <FaRocket />, title: "Getting Started", desc: "Learn the basics of SkillSphere." },
        { icon: <FaUserShield />, title: "Account Security", desc: "Manage your profile and privacy." },
        { icon: <FaCreditCard />, title: "Billing & Plans", desc: "Issues with payments or invoices." },
    ];

    return (
        <section className="min-h-screen bg-white">
        
            <div className="bg-gray-900 py-20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-[150px]"></div>
                </div>
                
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white mb-8 italic"
                    >
                        How can we <span className="text-purple-500">help?</span>
                    </motion.h1>
                    
                    <div className="max-w-2xl mx-auto relative group">
                        <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                        <input 
                            type="text" 
                            placeholder="Search for articles, guides, or questions..."
                            className="w-full pl-14 pr-6 py-5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl text-white outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                        />
                    </div>
                </div>
            </div>

       
            <div className="container mx-auto px-4 -mt-12 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {supportCards.map((card, idx) => (
                        <motion.div 
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 text-3xl mb-6">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-black text-gray-900 mb-2">{card.title}</h3>
                            <p className="text-gray-500">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

         
            <div className="container mx-auto px-4 py-24 max-w-3xl">
                <div className="flex items-center gap-4 mb-12">
                    <FaQuestionCircle className="text-purple-600 text-3xl" />
                    <h2 className="text-3xl font-black text-gray-900 italic">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden">
                            <button 
                                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 bg-gray-50/50 hover:bg-gray-50 transition-colors text-left"
                            >
                                <span className="font-bold text-gray-900">{faq.question}</span>
                                <motion.div
                                    animate={{ rotate: activeFaq === index ? 180 : 0 }}
                                    className="text-gray-400"
                                >
                                    <FaChevronDown />
                                </motion.div>
                            </button>
                            
                            <AnimatePresence>
                                {activeFaq === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="bg-white"
                                    >
                                        <div className="p-6 text-gray-600 leading-relaxed border-t border-gray-100">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>

        
            <div className="bg-gray-50 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black text-gray-900 mb-6">Still need help?</h2>
                    <p className="text-gray-500 mb-10">Our support team is available 24/7 to assist you.</p>
                    <button className="bg-purple-600 text-white px-12 py-4 rounded-2xl font-bold hover:bg-gray-900 transition-all shadow-xl shadow-purple-200">
                        Contact Support Team
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SupportPage;