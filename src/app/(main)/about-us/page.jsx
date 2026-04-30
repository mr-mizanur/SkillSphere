"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUsers, FaLightbulb, FaAward } from "react-icons/fa";
import Link from "next/link";

const AboutUsPage = () => {
  // এনিমেশন ভ্যারিয়েন্ট
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stats = [
    { id: 1, icon: <FaUsers />, count: "50K+", label: "Active Students" },
    { id: 2, icon: <FaGraduationCap />, count: "120+", label: "Expert Mentors" },
    { id: 3, icon: <FaLightbulb />, count: "300+", label: "Courses" },
    { id: 4, icon: <FaAward />, count: "95%", label: "Success Rate" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* হিরো সেকশন */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            {...fadeIn}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Empowering the Next Generation <br /> of <span className="text-purple-500">Digital Leaders</span>
          </motion.h1>
          <motion.p 
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            SkillSphere is more than just an e-learning platform. We are a community dedicated to bridging the gap between education and industry requirements.
          </motion.p>
        </div>
      </section>

      {/* স্ট্যাটস সেকশন */}
      <section className="py-12 -mt-16 container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <motion.div 
              key={stat.id}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center"
            >
              <div className="text-purple-600 text-3xl mb-4 flex justify-center italic">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-black text-gray-900">{stat.count}</h3>
              <p className="text-gray-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* আমাদের লক্ষ্য (Mission) সেকশন */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-1/2"
          >
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
              alt="Team working" 
              className="rounded-[2.5rem] shadow-2xl"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 space-y-6"
          >
            <h2 className="text-4xl font-black text-gray-900 italic">Our Mission & Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At SkillSphere, our mission is to make high-quality professional education accessible to everyone, everywhere. We believe that skills are the currency of the future.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 shrink-0">
                  <FaAward />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Industry Recognition</h4>
                  <p className="text-gray-500 text-sm">Our certificates are valued by top tech companies worldwide.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <FaLightbulb />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Innovative Learning</h4>
                  <p className="text-gray-500 text-sm">Interactive projects and real-world case studies for better grasp.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="bg-purple-600 p-12 rounded-[3rem] text-white shadow-[0_20px_50px_rgba(147,51,234,0.3)]"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-6 italic">Ready to transform your career?</h2>
            <p className="text-purple-100 text-lg mb-10 max-w-xl mx-auto">
              Join thousands of students who have already accelerated their learning with SkillSphere.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/courses" className="bg-white text-purple-600 px-10 py-4 rounded-2xl font-black hover:bg-gray-900 hover:text-white transition-all">
                Browse Courses
              </Link>
              <Link href='/contact' className="bg-purple-700 text-white border border-purple-400 px-10 py-4 rounded-2xl font-black hover:bg-purple-800 transition-all">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;