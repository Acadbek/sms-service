import React from "react";
import icon from "../../assets/icons/card1.svg";
import arrow from "../../assets/icons/card-arrow.svg";
const Card = ({
  img,
  arrowStyle = "block",
  borderSize = "1px",
  titleSize = ".87rem",
  title = "Как зарегистрировать аккаунт с помощью одноразового номера?",
  borderStyle,
}) => {
  return (
    <div
      className={`py-[1rem] h-[180px] px-[0.75rem]  border-[${borderSize}] rounded-[10px] border-${borderStyle}`}
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
