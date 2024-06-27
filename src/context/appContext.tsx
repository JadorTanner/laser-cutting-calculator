import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { AppContext, initialAppContext } from "./context";
import { appReducer } from "./reducers/reducers";
import { initialAppState } from "./state";

type Props = {
  children: React.ReactNode;
};

const appContext = createContext<AppContext>(initialAppContext);

export const useAppContext = () => {
  return useContext(appContext);
};

const ContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(appReducer, initialAppState);
  return (
    <appContext.Provider value={{ state, dispatch }}>
      {children}
    </appContext.Provider>
  );
};

export default ContextProvider;
