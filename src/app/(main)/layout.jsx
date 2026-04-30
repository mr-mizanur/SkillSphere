

import Footer from "@/components/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
     
     
      <Navbar />
      {children}
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
