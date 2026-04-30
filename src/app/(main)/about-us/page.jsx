import React from "react";

export const metadata = {
  title: "Dragon News - About Us",
  description: "Learn more about Dragon News - Journalism Without Fear or Favour.",
};

const AboutUsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
  
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Dragon News</h1>
        <p className="text-lg text-gray-600 italic">Journalism Without Fear or Favour</p>
        <div className="w-24 h-1 bg-[#D72050] mx-auto mt-4"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        <div className="space-y-6 text-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
          <p>
            Welcome to <strong>Dragon News</strong>, your most trusted source for real-time 
            updates and unbiased reporting. Since our inception, we have been committed to 
            delivering news that matters, focusing on integrity and truth.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900">What We Cover</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Breaking International and National News</li>
            <li>In-depth Sports analysis and updates</li>
            <li>Latest trends in Entertainment and Culture</li>
            <li>Government policies and political insights</li>
          </ul>

          <p>
            We believe in the power of information to change lives. Our team of dedicated 
            journalists works around the clock to ensure you never miss a beat of what is 
            happening around the world.
          </p>
        </div>

      
        <div className="bg-gray-100 p-8 rounded-lg border-l-4 border-[#D72050]">
          <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
          <div className="space-y-4">
            <div>
              <span className="font-bold text-[#D72050]">Reliability:</span>
              <p className="text-sm">Verified sources and fact-checked reporting.</p>
            </div>
            <div>
              <span className="font-bold text-[#D72050]">Speed:</span>
              <p className="text-sm">Instant breaking news notifications.</p>
            </div>
            <div>
              <span className="font-bold text-[#D72050]">Diversity:</span>
              <p className="text-sm">Wide range of categories from local to global.</p>
            </div>
          </div>
        </div>
      </div>

   
      <div className="mt-16 text-center p-8 bg-gray-50 rounded-xl">
        <h2 className="text-2xl font-bold mb-2">Want to join our team?</h2>
        <p className="mb-4 text-gray-600">We are always looking for passionate journalists and storytellers.</p>
        <button className="bg-[#D72050] text-white px-6 py-2 rounded font-medium hover:bg-red-700 transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default AboutUsPage;