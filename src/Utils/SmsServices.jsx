import React from "react";
import SmsServicesCard from "../components/sms-services-card";
import { SmsServicesContextData } from "../Context/SmsServicesContext";

const SmsServices = () => {
  const [res] = SmsServicesContextData();
  console.log(res, "res");
  return (
    <div className="container">
      <h2 className="text-[30px] leading-[1.3] font-bold mb-12 pt-16">
        Дополнительный фунционал
      </h2>
      <div className="grid grid-cols-12 gap-6">
        {res.map((item) => (
          <div className="lg:col-span-6  col-span-12">
            <SmsServicesCard
              icon={item.icon}
              title={item.title}
              text={item.text}
              link={item.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmsServices;
