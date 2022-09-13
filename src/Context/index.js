import { createContext } from "react";
import AdditionalAspectsContext from "./AdditionalSectionContext";
import DataContext from "./HomeContext";
import SmsReceptionProvider from "./SmsReceptionContext";
import SmsServicesContextProvider from "./SmsServicesContext";

export const Context = createContext();

const MainContext = ({ children }) => {
  return (
    <Context.Provider>
      <AdditionalAspectsContext>
        <SmsServicesContextProvider>
          <SmsReceptionProvider>
            <DataContext>{children}</DataContext>
          </SmsReceptionProvider>
        </SmsServicesContextProvider>
      </AdditionalAspectsContext>
    </Context.Provider>
  );
};

export default MainContext;
