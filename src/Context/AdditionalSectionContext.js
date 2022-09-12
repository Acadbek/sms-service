import React, { createContext, useContext, useState } from "react";

export const AdditionalContext = createContext();
export const AdditionalData = () => useContext(AdditionalContext);

const AdditionalSectionContext = ({ children }) => {
  const [data, setData] = useState([{ id: 1, icon: "", title: "" }]);
  return (
    <AdditionalContext.Provider value={[data, setData]}>
      {children}
    </AdditionalContext.Provider>
  );
};

export default AdditionalSectionContext;
