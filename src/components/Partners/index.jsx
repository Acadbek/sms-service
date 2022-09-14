import React from "react";
import icon1 from "../../assets/icons/partners/icon1.svg";
import icon2 from "../../assets/icons/partners/icon2.svg";
import icon3 from "../../assets/icons/partners/icon3.svg";
import icon4 from "../../assets/icons/partners/icon4.svg";
import icon5 from "../../assets/icons/partners/icon5.svg";
import icon6 from "../../assets/icons/partners/16.png";
import icon7 from "../../assets/icons/partners/icon7.svg";
import icon8 from "../../assets/icons/partners/icon8.svg";
import icon9 from "../../assets/icons/partners/icon9.svg";

const data = [
  {
    id: 1,
    icon: icon1,
  },
  {
    id: 2,
    icon: icon2,
  },
  {
    id: 3,
    icon: icon3,
  },
  {
    id: 4,
    icon: icon4,
  },
  {
    id: 5,
    icon: icon5,
  },
  {
    id: 6,
    icon: icon6,
  },
  {
    id: 7,
    icon: icon7,
  },
  {
    id: 8,
    icon: icon8,
  },
  {
    id: 9,
    icon: icon9,
  },
];

const Partners = () => {
  return (
    <div className="flex flex-wrap justify-between items-center gap-2 container lg:mt-0 md:mt-0 py-4">
      {data.map((item) => (
        <img
          key={item.id}
          className="cursor-pointer object-cover"
          src={item.icon}
          alt=""
        />
      ))}
    </div>
  );
};

export default Partners;
