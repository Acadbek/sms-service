import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Main = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Main;
