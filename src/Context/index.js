import { createContext } from "react";
import AdditionalAspectsContext from "./AdditionalSectionContext";
import DataContext from "./HomeContext";
import SmsServicesContextProvider from "./SmsServicesContext";
export const Context = createContext();

const MainContext = ({ children }) => {
  return (
    <Context.Provider>
      <AdditionalAspectsContext>
        <SmsServicesContextProvider>
          <DataContext>{children}</DataContext>
        </SmsServicesContextProvider>
      </AdditionalAspectsContext>
    </Context.Provider>
  );
};

export default MainContext;
