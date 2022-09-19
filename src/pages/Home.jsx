import React from "react";
import SmsReception from "../Sections/SmsReception";
import AdditionalAspects from "../Sections/AdditionalAspects";
import Header from "../Sections/Header";
import SmsServices from "../Sections/SmsServices";
import InformationSection from "../Sections/InformationSection";
import TextInfoSection from "../Sections/TextInfoSection";
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
      <div className="lg:mt-32 md:mt-16 sm:mt-12 mt-12">
        <SmsServices />
      </div>
      <div className="lg:mt-12 md:mt-12 sm:mt-12 mt-12">
        <SmsReception />
      </div>
      <div className="lg:mt-12 md:mt-12 sm:mt-12 mt-12 mx-3">
        <InformationSection />
      </div>
      <div className="lg:mt-32 md:mt-32 mb-24 sm:mt-12 mt-12">
        <TextInfoSection />
      </div>
      <Footer />
      <Partners />
    </div>
  );
};

export default Home;
