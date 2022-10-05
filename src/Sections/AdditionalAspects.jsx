import React from "react";
import AdditionalCard from "../components/Additional-card";
import { AdditionalData } from "../Context/AdditionalSectionContext";

const AdditionalAspects = () => {
  const [res] = AdditionalData();
  // console.log(res);
  return (
    <div className="container py-24">
      <h2 className="text-4xl font-bold leading-10">
        Нужно принять смс? Примем на свои номера.
      </h2>
      <p className="text-lg leading-7 mt-4 mb-[70px]">
        Virtual number in the name means that the numbers are available to users
        online in your account. <br /> We have 2 types of phone numbers:
        temporary and disposable phone numbers.
      </p>
      <div className="grid grid-cols-12 lg:gap-12 md:gap-12">
        {res.map((item) => (
          <div
            className="md:col-span-6 xl:col-span-6 lg:col-span-6 col-span-12"
            key={item.id}
          >
            <AdditionalCard
              title={item.title}
              subTitle={item.subTitle}
              img={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalAspects;
