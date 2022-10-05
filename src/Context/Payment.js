import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const PaymentContext = createContext();
export const PaymentData = () => useContext(PaymentContext);

const PaymentProvider = ({ children }) => {
  const [data, setData] = useState();

  const post = async (
    email,
    source,
    name,
    address,
    line1,
    postal_code,
    city,
    state,
    country
  ) => {
    await axios
      .post("http://localhost:3001/payment", {
        email: email,
        source: source,
        name: name,
        address: address,
        line1: line1,
        postal_code: postal_code,
        city: city,
        state: state,
        country: country,
      })
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    post();
  }, []);

  return (
    <PaymentContext.Provider value={[data, setData]}>
      {children}
    </PaymentContext.Provider>
  );
};

export default PaymentProvider;
