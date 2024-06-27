import { AppActions, AppActionsKinds } from "../actions";
import { Design, General, LaserValues, Material } from "../context";
import { AppState } from "../state";

export function appReducer(state: AppState, action: AppActions): AppState {
  switch (action.type) {
    case AppActionsKinds.UPDATE_LASER_CUT:
      return {
        ...state,
        laser: {
          ...state.laser,
          cut: action.payload as LaserValues,
        },
      };
    case AppActionsKinds.UPDATE_LASER_ENGRAVE:
      return {
        ...state,
        laser: {
          ...state.laser,
          engrave: action.payload as LaserValues,
        },
      };
    case AppActionsKinds.UPDATE_DESIGN:
      return {
        ...state,
        design: action.payload as Design,
      };
    case AppActionsKinds.UPDATE_MATERIAL:
      return {
        ...state,
        material: action.payload as Material,
      };
    case AppActionsKinds.UPDATE_SETTINGS:
      return {
        ...state,
        general: action.payload as General,
      };
    case AppActionsKinds.UPDATE_TOTAL_COST:
      return {
        ...state,
        general: {
          ...state.general,
          finalCost: action.payload as number,
        },
      };
    default:
      return state;
  }
}
