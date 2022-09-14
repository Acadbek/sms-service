import React from "react";
import icon from "../../assets/images/icon-1.png";
const AdditionalCard = ({
  img = icon,
  title = "Доступны более 100 номеров",
  subTitle = "Используйте для приватной регистрации на различных сайтах, сервисах и приложениях",
}) => {
  return (
    <div className="flex items-center gap-5 mt-8">
      <div>
        <img width={84} height={84} src={img} alt="icon" />
      </div>
      <div>
        <p className="text-[16px] leading-[20px] font-bold mb-2 lg:w-full md:w-full w-[280px]">
          {title}
        </p>
        <p className="leading-[22px] text-[13px] md:text-base lg:text-base lg:w-full md:w-full w-[280px]">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default AdditionalCard;
