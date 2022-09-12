import React from "react";
import icon from "../../assets/icons/card1.svg";
import arrow from "../../assets/icons/card-arrow.svg";
const Card = ({
  img = icon,
  arrowStyle = "block",
  borderSize = "1px",
  titleSize = ".87rem",
  title = "Select the country in which you want the phone number. Select the site from which to receive SMS.",
  dashed = "dashed",
}) => {
  return (
    <div
      className={`py-[1rem] h-[180px] px-[0.75rem] border-${dashed} border-[${borderSize}] rounded-[10px]`}
    >
      <div className="flex items-center mb-[1.5rem] gap-7">
        <img src={img} alt="icon" />
        <img src={arrow} className={`${arrowStyle}`} alt="" />
      </div>
      <p className={`text-white text-[${titleSize}]`}>{title}</p>
    </div>
  );
};

export default Card;
