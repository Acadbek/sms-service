import React from "react";
import logo from "../assets/icons/logo.svg";
import signIn from "../assets/icons/signin.svg";
import signUp from "../assets/icons/signup.svg";

const Footer = () => {
  return (
    <div className="bg-black text-white md:my-0 lg:my-0 my-8">
      <div className="container flex justify-center items-center py-4">
        <div className="flex justify-between items-center container">
          <div className="flex items-center gap-3 py-3">
            <img width={32} height={32} src={logo} alt="Logo" />
            <div className="lg:flex lg:gap-4 xl:flex xl:gap-4">
              <span className="font-bold text-white font-roboto tracking-[.175em] uppercase md:text-[.85rem] lg:text-[1rem] xl:text-[1rem] text-[.75rem]">
                SMS SERVICE
              </span>
              <span className="w-[1px] border-white border-[1px] h-[32px] hidden lg:block xl:block"></span>
              <span
                className="uppercase 
                tracking-[.13em] 
                md:text-[.55rem] 
                text-[.45rem] 
                md:leading-[1.5] 
                lg:leading-[1.5] 
                xl:leading-[1.5]  
                xl:text-[.6rem] 
                lg:text-[.6rem] 
                text-white"
              >
                <br className="lg:hidden xl:hidden " /> RENT A NUMBER
                <br className="hidden md:hidden lg:block xl:block" /> FOR
                RECEIVING SMS
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between md:flex lg:flex hidden">
            <div className="flex items-center justify-between gap-[25px] w-fit">
              <div className="flex flex-col items-center p-3 cursor-pointer gap-2 hover:text-white">
                <img src={signIn} alt="" />
                <p className="text-[.813rem] text-[#ababab]">Sign in</p>
              </div>
              <div className="border border-white h-12"></div>
              <div className="flex flex-col items-center p-3 cursor-pointer gap-2 hover:text-white">
                <img src={signUp} alt="" />
                <p className="text-[.813rem] text-[#ababab]">Sign up</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border"></div>
      <div className="container py-7 lg:flex md:flex justify-between text-[#ababab] text-[.8rem] font-bold leading-[20px]">
        <ul className="flex flex-col gap-2 lg:mt-0 md:mt-0 mt-4">
          <li>Описание возможностей</li>
          <li>Цены</li>
          <li>API</li>
          <li>Часто задаваемые вопросы</li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li>Новости и акции</li>
          <li>Для разработчиков</li>
          <li>Как работает сервис</li>
          <li>Бесплатные номера</li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li>Реферальная программа</li>
          <li>Актуальные сервисы</li>
          <li>Отзывы</li>
          <li>Правила использования</li>
        </ul>
        <ul className="flex flex-col gap-2 lg:mb-0 md:mb-0 mb-4">
          <li>Запреты и ограничения</li>
          <li>Где можно использовать номера</li>
          <li>Служба поддержки</li>
          <li>Политика конфиденциальности</li>
        </ul>
      </div>
      <div className="border"></div>
      <p className="text-center text-[10px] text-[#ccc] py-2">
        ИП Башлаев Евгений Борисович ИНН: 614550559106. ОГРН: 317619600125742
      </p>
    </div>
  );
};

export default Footer;
