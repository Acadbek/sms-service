import React, { createContext, memo, useContext, useState } from "react";
import icon1 from "../assets/images/icon-1.png";
import icon2 from "../assets/images/icon-2.png";
import icon3 from "../assets/images/icon-3.png";
import icon4 from "../assets/images/icon-4.png";
import icon5 from "../assets/images/icon-5.png";
import icon6 from "../assets/images/icon-6.png";

export const AdditionalAspectsContext = createContext();
export const AdditionalData = () => useContext(AdditionalAspectsContext);

const AdditionalSectionContext = ({ children }) => {
  const [data, setData] = useState([
    {
      id: 1,
      icon: icon1,
      title: "Доступны более 100 номеров",
      subTitle:
        "Используйте для приватной регистрации на различных сайтах, сервисах и приложениях",
    },
    {
      id: 2,
      icon: icon2,
      title: "Number exclusivity",
      subTitle:
        "We don't sell numbers twice. Availability information is updated every 10 minutes.",
    },
    {
      id: 3,
      icon: icon3,
      title: "No VoIP",
      subTitle:
        "Temporary numbers of real SIM cards (not VoIP) with an option to select a cellular operator for account verification and QA tests",
    },
    {
      id: 4,
      icon: icon4,
      title: "Доступно 170+ стран для смс активаций",
      subTitle:
        "В наличии, переодически добавляются новые страны, самые разные и экзотичные",
    },
    {
      id: 5,
      icon: icon5,
      title: "Принимаем различные валюты",
      subTitle:
        "Принимаем платежи от популярных платежных систем, в том числе криптовалюты в автоматическом режиме",
    },
    {
      id: 6,
      icon: icon6,
      title: "Номер на 20 минут + повторные смс",
      subTitle:
        "Платите только за сообщение, если номер не получил сообщение, деньги возвращаются на баланс.",
    },
  ]);
  console.log("additional");
  return (
    <AdditionalAspectsContext.Provider value={[data, setData]}>
      {children}
    </AdditionalAspectsContext.Provider>
  );
};

export default memo(AdditionalSectionContext);
