import React from "react";
import SmsReception from "../Utils/SmsReception";
import AdditionalAspects from "../Utils/AdditionalAspects";
import Header from "../Utils/Header";
import SmsServices from "../Utils/SmsServices";
import InformationSection from "../Utils/InformationSection";
import TextInfoSection from "../Utils/TextInfoSection";
import Footer from "../layouts/Footer";
import Partners from "../components/partners";
import Navbar from "../layouts/Navbar";
const Home = () => {
  return (
    <div>
      <div className="mb-12">
        <Navbar />
      </div>
      <Header />
      <AdditionalAspects />
      <SmsServices />
      <SmsReception />
      <InformationSection />
      <TextInfoSection />
      <Footer />
      <Partners />
    </div>
  );
};

export default Home;
