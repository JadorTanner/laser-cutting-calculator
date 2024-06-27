import { Design, General, LaserValues, Material } from "./context";

export enum AppActionsKinds {
  UPDATE_LASER_CUT,
  UPDATE_LASER_ENGRAVE,
  UPDATE_DESIGN,
  UPDATE_MATERIAL,
  UPDATE_SETTINGS,
  UPDATE_TOTAL_COST,
}

export interface AppActions {
  type: AppActionsKinds;
  payload: string | number | Design | General | Material | LaserValues;
}

export interface UpdateDesign {
  type: AppActionsKinds.UPDATE_DESIGN;
  payload: Design;
}

export interface UpdateLaser {
  type: AppActionsKinds.UPDATE_LASER_CUT | AppActionsKinds.UPDATE_LASER_ENGRAVE;
  payload: LaserValues;
}

export const actions = {};
