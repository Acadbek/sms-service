import React from "react";

const SmsServicesCard = ({ icon, title, text, link }) => {
  return (
    <div className="border-4 p-[30px]">
      <div className="flex items-center gap-5 mb-[17px]">
        <img src={icon} alt="Icon" />
        <p className="text-[1.75rem] font-medium leading-[1.2]">{title}</p>
      </div>
      <p className="leading-[20px] mb-[17px]">{text}</p>
      <p className="text-[#c5a67c] underline hover:no-underline inline-block cursor-pointer">
        {link}
      </p>
    </div>
  );
};

export default SmsServicesCard;
