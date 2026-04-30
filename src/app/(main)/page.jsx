import Hero from "@/components/homepage/Hero";
import PopularCourses from "@/components/homepage/PopularCourses";
import React from "react";

const Home = () => {
  return (
    <div>
     
      <Hero />

     
      <section className="container mx-auto py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Start Your Learning Journey
        </h2>
        <p className="text-gray-600 mt-2">
          Explore our wide range of professional courses.
        </p>
      </section>
      <PopularCourses />
    </div>
  );
};

export default Home;