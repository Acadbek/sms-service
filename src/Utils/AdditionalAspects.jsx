import React from "react";
import AdditionalCard from "../components/Additional-card";
import { AdditionalData } from "../Context/AdditionalSectionContext";

const AdditionalAspects = () => {
  const [res] = AdditionalData();
  console.log(res);
  return (
    <div className="container py-24">
      <h2 className="text-4xl font-bold leading-10">
        Нужно принять смс? Примем на свои номера.
      </h2>
      <p className="text-lg leading-6 mt-4">
        Virtual number in the name means that the numbers are available to users
        online in your account. <br /> We have 2 types of phone numbers:
        temporary and disposable phone numbers.
      </p>
      <AdditionalCard />
    </div>
  );
};

export default AdditionalAspects;
