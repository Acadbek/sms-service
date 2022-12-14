import React from "react";
import icon1 from "../assets/icons/infoIcon1.svg";
import icon2 from "../assets/icons/infoIcon2.svg";
import telegramIcon from "../assets/icons/telegramIcon.svg";
const InformationSection = () => {
  return (
    <div className="bg-black container lg:flex gap-12 text-white p-18 rounded-[10px]">
      <div className="lg:basis-2/4 lg:pt-12 lg:pl-12 pl-0 md:pl-12 pt-8">
        <img width={25} height={25} src={icon1} alt="icon" />
        <p className="text-[1.25rem] font-bold mb-4 mt-6">
          Партнерская программа для смс-активаций
        </p>
        <p className="text-[#c7c7c7] text-[.95rem] break-words text-justify">
          Привлекайте клиентов и получайте вознаграждение 10% за купленное смс.
          Это самый большой процент отчислений на рынке! <br />
          <br /> Вознаграждения будут начисляться все время до тех пор пока ваши
          клиенты пользуются нашим сервисом. <br />
          <br /> Для участия в реферальной программе по смс активациям, нужно
          зарегистрироваться и взять реферальную ссылку в профиле. Берите
          реферальную ссылку и размещайте на своих трафиковых ресурасах
        </p>
      </div>
      <div className="lg:basis-2/4 lg:pt-12 md:pr-12 pr-0 lg:pr-12 pb-12 pt-8">
        <img width={25} height={25} src={icon2} alt="" />
        <p className="text-[1.25rem] font-bold mb-4 mt-6">Скидки и новости</p>
        <p className="text-[#c7c7c7] text-[.95rem] break-words">
          Отслеживайте новости нашего сервиса и купоны на сайтах партнеров и
          получайте скидки на покупку смс активаций.
        </p>
        <div className="flex justify-center flex-col items-center mt-[100px] ">
          <p className="text-center">ЖМИ!</p>
          <img
            className="mt-4 hover:scale-150 transition-all cursor-pointer transform-cpu"
            src={telegramIcon}
            alt=""
          />
        </div>
        <button className="w-full hover:bg-[#b49160] transition-all  max-w-[685px] px-[1.25rem] py-[1rem] bg-[#C9AA80] text-white mt-[3.75rem] rounded-[10px] text-center">
          Номера для смс онлайн
        </button>
      </div>
    </div>
  );
};

export default InformationSection;
