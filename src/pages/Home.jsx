import React from "react";
import SmsReception from "../Utils/SmsReception";
import AdditionalAspects from "../Utils/AdditionalAspects";
import Header from "../Utils/Header";
import SmsServices from "../Utils/SmsServices";
import InformationSection from "../Utils/InformationSection";
import TextInfoSection from "../Utils/TextInfoSection";
import Footer from "../layouts/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <AdditionalAspects />
      <SmsServices />
      <SmsReception />
      <InformationSection />
      <TextInfoSection />
      <Footer />
    </div>
  );
};

export default Home;
