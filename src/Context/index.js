import { Fragment } from "react";
import AdditionalAspectsContext from "./AdditionalSectionContext";
import DataContext from "./HomeContext";
import SmsReceptionProvider from "./SmsReceptionContext";
import SmsServicesContextProvider from "./SmsServicesContext";
import PaymentContext from "./Payment";

const MainContext = ({ children }) => {
  return (
    <Fragment>
      <PaymentContext>
        <AdditionalAspectsContext>
          <SmsServicesContextProvider>
            <SmsReceptionProvider>
              <DataContext>{children}</DataContext>
            </SmsReceptionProvider>
          </SmsServicesContextProvider>
        </AdditionalAspectsContext>
      </PaymentContext>
    </Fragment>
  );
};

export default MainContext;
