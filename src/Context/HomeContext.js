import { createContext, useContext, useState } from "react";

import icon1 from "../assets/icons/card1.svg";
import icon2 from "../assets/icons/card2.svg";
import icon3 from "../assets/icons/card3.svg";

export const DataContext = createContext();
export const AllData = () => useContext(DataContext);

const Context = ({ children }) => {
  const [data, setData] = useState([
    {
      id: 1,
      icon: icon1,
      title:
        "Select the country in which you want the phone number. Select the site from which to receive SMS.",
    },
    {
      id: 2,
      icon: icon2,
      title: "The number is issued online and once ready to receive sms.",
    },
    {
      id: 3,
      icon: icon3,
      title:
        "Incoming SMS with a verification code will immediately appear in your personal cabinet.",
    },
  ]);

  return (
    <DataContext.Provider value={[data, setData]}>
      {children}
    </DataContext.Provider>
  );
};

export default Context;
