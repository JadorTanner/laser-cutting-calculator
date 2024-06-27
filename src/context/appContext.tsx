import React, { createContext, useContext, useEffect, useReducer } from "react";
import { AppContext, initialAppContext } from "./context";
import { appReducer } from "./reducers/reducers";
import { initialAppState } from "./state";
import { AppActionsKinds } from "./actions";

type Props = {
  children: React.ReactNode;
};

const appContext = createContext<AppContext>(initialAppContext);

export const useAppContext = () => {
  return useContext(appContext);
};

const ContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(appReducer, initialAppState);
  useEffect(() => {
    console.log("UPDATING TOTAL COST");
    dispatch({
      type: AppActionsKinds.UPDATE_TOTAL_COST,
    });
  }, [
    state.design,
    state.general.electricityCost,
    state.general.maintenancePercentage,
    state.general.profitMargin,
    state.laser,
    state.material,
  ]);

  return (
    <appContext.Provider value={{ state, dispatch }}>
      {children}
    </appContext.Provider>
  );
};

export default ContextProvider;
