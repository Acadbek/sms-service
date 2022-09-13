import React, { createContext, useContext, useState } from "react";
import icon1 from "../assets/images/additional-icon-1.png";
import icon2 from "../assets/images/additionalIcon1.png";
import icon3 from "../assets/images/additionalIcon2.png";
import icon4 from "../assets/images/additionalIcon3.png";
import icon5 from "../assets/images/additionalIcon4.png";

export const SmsServicesContextProvider = createContext();
export const SmsServicesContextData = () =>
  useContext(SmsServicesContextProvider);

const SmsServicesContext = ({ children }) => {
  const [data, setData] = useState([
    {
      id: 1,
      icon: icon1,
      title: "API for receiving sms",
      text: "Our customers use API to automate the purchase of temporary phone numbers, request and receive sms to purchased numbers. Integrate with the sms activation API and buy thousands of temporary numbers to receive sms automatically. Our temporary phone number API is fully compatible with competitors' sites.",
      link: "API Документация",
    },
    {
      id: 2,
      icon: icon2,
      title: "Номера на длительный срок",
      text: "В обычной аренде временных номеров телефонов вы можете получать смс только на протяжении 20 минут. Если вам необходимо переодически принимать смс то используйте длительную аренду номеров телефонов. Доступно 22 страны вместо 195 стран при аренды номера на 20 минут. Купить номера для смс можно на срок от 1 дня до 3 месяцев",
      link: "Посмотреть цены на номера для длительной аренды",
    },
    {
      id: 3,
      icon: icon3,
      title: "Вы разработчик софта?",
      text: "В обычной аренде временных номеров телефонов вы можете получать смс только на протяжении 20 минут. Если вам необходимо переодически принимать смс то используйте длительную аренду номеров телефонов. Доступно 22 страны вместо 195 стран при аренды номера на 20 минут. Купить номера для смс можно на срок от 1 дня до 3 месяцев",
      link: 'Подробнее'
    },
    {
      id: 4,
      icon: icon4,
      title: "Для чего подойдет прием смс",
      text: "Для продвижения сайта с помощью SEO программ, продвижения рекламных аккаунтов, защита от мошеннических сайтов, которые просят ввести номер например телефона для скачивания файла или просмотра фильма. Защита от спама. Чтобы в будущем не пришлось искать способы как избавиться от смс спама используйте временный, анонимный номер.",
    },
    {
      id: 5,
      icon: icon5,
      title: "Смс активации оптом",
      text: "Покупаете более 50 смс подтверждений в сутки? Получите скидку 20% на все страны и сервисы",
    },
  ]);
  return (
    <SmsServicesContextProvider.Provider value={[data, setData]}>
      {children}
    </SmsServicesContextProvider.Provider>
  );
};

export default SmsServicesContext;
