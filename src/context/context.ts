import { AppActions } from "./actions";
import { AppState, initialAppState } from "./state";

export type LaserValues = {
  power: number;
  speed: number;
  passes: number;
};
export type Design = {
  width: number;
  height: number;
  time: number;
  length: number;
};

export type Material = {
  materialCost: number;
  materialWidth: number;
  materialHeight: number;
};
export type General = {
  electricityCost: number;
  maintenancePercentage: number;
  profitMargin: number;
  finalCost: number;
};

export type AppContext = {
  state: AppState;
  dispatch: React.Dispatch<AppActions>;
};

export const initialAppContext: AppContext = {
  state: initialAppState,
  dispatch: () => undefined,
};
