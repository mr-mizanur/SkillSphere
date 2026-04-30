"use client";

import React from 'react';
import { motion } from "framer-motion";
import { FaLock, FaEye, FaDatabase, FaUserShield } from 'react-icons/fa';

const PrivacyPolicy = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const policies = [
        {
            icon: <FaDatabase />,
            title: "Information Collection",
            content: "We collect information you provide directly to us, such as when you create an account, enroll in a course, or communicate with our support team."
        },
        {
            icon: <FaEye />,
            title: "How We Use Data",
            content: "Your data helps us personalize your learning experience, process payments securely, and send you important updates about your courses."
        },
        {
            icon: <FaLock />,
            title: "Data Protection",
            content: "We implement advanced encryption and security measures to ensure your personal information remains safe from unauthorized access."
        },
        {
            icon: <FaUserShield />,
            title: "Your Rights",
            content: "You have the right to access, update, or delete your personal data at any time through your profile settings or by contacting us."
        }
    ];

    return (
        <section className="min-h-screen bg-white py-20">
            <div className="container mx-auto px-4 max-w-5xl">
                
                
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="text-center mb-20"
                >
                    <div className="inline-block p-3 bg-purple-50 rounded-2xl text-purple-600 mb-6">
                        <FaLock size={32} />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter italic">
                        Privacy <span className="text-purple-600">Policy</span>
                    </h1>
                    <p className="text-gray-500 text-lg">Your privacy is our priority. Learn how we handle your data at SkillSphere.</p>
                </motion.div>

              
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {policies.map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="text-purple-600 text-2xl mb-4">{item.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.content}</p>
                        </motion.div>
                    ))}
                </div>

               
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="prose prose-purple max-w-none bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100"
                >
                    <h2 className="text-3xl font-black text-gray-900 mb-6 italic">Detailed Information</h2>
                    <div className="space-y-8 text-gray-600">
                        <p>
                            At <strong>SkillSphere</strong>, we are committed to protecting your privacy. This policy outlines our practices regarding the collection, use, and disclosure of your information through our platform.
                        </p>
                        
                        <h4 className="font-bold text-gray-900 text-xl">Third-Party Services</h4>
                        <p>
                            We may use third-party service providers to monitor and analyze the use of our service, or to process payments. These third parties have access to your Personal Data only to perform these tasks on our behalf.
                        </p>

                        <h4 className="font-bold text-gray-900 text-xl">Cookies Policy</h4>
                        <p>
                            We use cookies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                        </p>
                    </div>

                    <div className="mt-12 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-sm text-gray-400 font-medium">Last Updated: April 30, 2026</p>
                        <button className="px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-purple-600 transition-all shadow-lg">
                            Download PDF Version
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;