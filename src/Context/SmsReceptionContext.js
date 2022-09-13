import React, { createContext, useContext, useState } from "react";
import icon from "../assets/icons/smsIcon.svg";
import icon1 from "../assets/icons/smsIcon1.svg";
import icon2 from "../assets/icons/smsIcon2.svg";
import icon3 from "../assets/icons/smsIcon3.svg";
import icon4 from "../assets/icons/smsIcon4.svg";

export const SmsReceptionProvider = createContext();
export const SmsReceptionData = () => useContext(SmsReceptionProvider);

const SmsReception = ({ children }) => {
  const [data, setData] = useState([
    {
      id: 1,
      icon: icon,
      smallText: "Шаг 1",
      title: "Зарегистрируйтесь и пополните баланс",
    },
    { id: 2, icon: icon1, smallText: "Шаг 2", title: "Выберите страну" },
    { id: 3, icon: icon2, smallText: "Шаг 3", title: "Уточните оператора" },
    {
      id: 4,
      icon: icon3,
      smallText: "Шаг 4",
      title: "Выберите сайте (сервис)",
    },
    {
      id: 5,
      icon: icon4,
      smallText: "Шаг 5",
      title: "Выдадим номер, используйте для смс",
    },
  ]);
  return (
    <SmsReceptionProvider.Provider value={[data, setData]}>
      {children}
    </SmsReceptionProvider.Provider>
  );
};

export default SmsReception;
