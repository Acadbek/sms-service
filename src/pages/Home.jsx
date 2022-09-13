import React from "react";
import SmsReception from "../Utils/SmsReception";
import AdditionalAspects from "../Utils/AdditionalAspects";
import Header from "../Utils/Header";
import SmsServices from "../Utils/SmsServices";

const Home = () => {
  return (
    <div>
      <Header />
      <AdditionalAspects />
      <SmsServices />
      <SmsReception />
    </div>
  );
};

export default Home;
