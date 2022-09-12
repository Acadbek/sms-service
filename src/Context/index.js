import { createContext } from "react";
import AdditionalContext from "./AdditionalSectionContext";
import DataContext from "./HomeContext";

export const Context = createContext();

const MainContext = ({ children }) => {
  return (
    <Context.Provider>
      <AdditionalContext>
        <DataContext>{children}</DataContext>
      </AdditionalContext>
    </Context.Provider>
  );
};

export default MainContext;
