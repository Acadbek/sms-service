import React from "react";
import icon3 from "../../assets/icons/partners/icon3.svg";
import icon9 from "../../assets/icons/partners/icon9.svg";

const data = [
  {
    id: 3,
    icon: icon3,
  },
  {
    id: 9,
    icon: icon9,
  },
];

const Partners = () => {
  return (
    <div className="flex flex-wrap justify-evenly items-center gap-2 container lg:my-4 md:my-4 ">
      {data.map((item) => (
        <img
          key={item.id}
          className="cursor-pointer object-cover"
          src={item.icon}
          alt="Partner's logo"
        />
      ))}
    </div>
  );
};

export default Partners;
