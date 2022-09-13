import React, { useState } from "react";

const SmsReceptionCard = ({ icon, title, smallText }) => {
  const [isActiveBtn] = useState(false);
  return (
    <div className="rounded-[10px] bg-white pb-10 hover:drop-shadow-xl ease-in-out duration-300 relative border-dashed w-full border border-[#a6a6a6]">
      <img
        className="transform translate-x-2/4 p-2 bg-[#c5a67c] w-8 h-8 rounded-[10px] top-[-17px] right-2/4 absolute"
        src={icon}
        alt="icon"
      />
      <p className="text-center mt-8 text-[.7rem] mb-4 text-[#c7c7c7]">
        {smallText}
      </p>
      <p className="text-center text-[1rem] text-[#212529]">{title}</p>
      {isActiveBtn ? <button>Регистрация</button> : ""}
    </div>
  );
};

export default SmsReceptionCard;
