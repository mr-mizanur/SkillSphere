"use client";

import React from 'react';
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const ContactPage = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="min-h-screen bg-white py-20">
            <div className="container mx-auto px-4">
                {/* হেডার এনিমেশন */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tighter italic">
                        Get In <span className="text-purple-600">Touch</span>
                    </h1>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Have questions about our courses or need assistance? Our team is here to help you accelerate your learning journey.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    
                    {/* কন্টাক্ট ইনফো কার্ডস */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-1 space-y-6"
                    >
                        <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6 text-xl">
                                <FaPhoneAlt />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                            <p className="text-gray-600">+880 1234 567890</p>
                            <p className="text-gray-400 text-sm mt-1">Mon - Fri, 9am - 6pm</p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 text-xl">
                                <FaEnvelope />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                            <p className="text-gray-600">support@skillsphere.com</p>
                            <p className="text-gray-400 text-sm mt-1">Online support 24/7</p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6 text-xl">
                                <FaMapMarkerAlt />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Office</h3>
                            <p className="text-gray-600">Dhaka, Bangladesh</p>
                            <p className="text-gray-400 text-sm mt-1">Level 4, Tech Plaza</p>
                        </div>
                    </motion.div>

                    {/* কন্টাক্ট ফর্ম */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden"
                    >
                        {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full -mr-16 -mt-16 opacity-50"></div>

                        <h2 className="text-3xl font-black text-gray-900 mb-8 italic">Send a Message</h2>
                        
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="Mizanur Rahman"
                                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                    <input 
                                        type="email" 
                                        placeholder="mizdev@example.com"
                                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                                <input 
                                    type="text" 
                                    placeholder="Inquiry about Course"
                                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                <textarea 
                                    rows="5"
                                    placeholder="Write your message here..."
                                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all resize-none"
                                ></textarea>
                            </div>

                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full py-5 bg-purple-600 text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-900 transition-all shadow-xl shadow-purple-200"
                            >
                                <FaPaperPlane /> Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;