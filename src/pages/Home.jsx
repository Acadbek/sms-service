import React from "react";
import SmsReception from "../Utils/SmsReception";
import AdditionalAspects from "../Utils/AdditionalAspects";
import Header from "../Utils/Header";
import SmsServices from "../Utils/SmsServices";
import InformationSection from "../Utils/InformationSection";
import TextInfoSection from "../Utils/TextInfoSection";
import Footer from "../layouts/Footer";
import Partners from "../components/Partners";
import Navbar from "../layouts/Navbar";
const Home = () => {
  return (
    <div>
      <div className="mb-12">
        <Navbar />
      </div>
      <Header />
      <div className="lg:mt-12 md:mt-12 sm:mt-12 mt-12">
        <AdditionalAspects />
      </div>
      <div className="lg:mt-12 md:mt-12 sm:mt-12 mt-12">
        <SmsServices />
      </div>
      <div className="lg:mt-12 md:mt-12 sm:mt-12 mt-12">
        <SmsReception />
      </div>
      <div className="lg:mt-12 md:mt-12 sm:mt-12 mt-12">
        <InformationSection />
      </div>
      <div className="lg:mt-12 md:mt-12 sm:mt-12 mt-12">
        <TextInfoSection />
      </div>
      <Footer />
      <Partners />
    </div>
  );
};

export default Home;
