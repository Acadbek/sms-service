import React from "react";
import SmsReceptionCard from "../components/Sms-reception-card";
import { SmsReceptionData } from "../Context/SmsReceptionContext";

const SmsReception = () => {
  const [res] = SmsReceptionData();
  return (
    <div className="bg-[#f6f6f6] py-24">
      <div className="container">
        <h2 className="text-[1.75rem] mb-12 font-medium">
          Как купить прием смс?
        </h2>
        <div className="grid grid-cols-12 gap-8">
          {res.map((item) => (
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <SmsReceptionCard
                title={item.title}
                smallText={item.smallText}
                icon={item.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmsReception;
