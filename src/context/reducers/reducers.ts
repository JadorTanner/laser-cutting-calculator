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
      try {
        const { width, height, length, time } = state.design;
        const { power, speed, passes } = state.laser.cut;
        const { materialCost, materialHeight, materialWidth } = state.material;
        const { electricityCost, maintenancePercentage, profitMargin } =
          state.general;

        // Cálculo del costo de energía
        const machinePower = 90;
        const actualPower = (power / 100) * machinePower;
        const timeInHours = time / 60;
        const energyCost = actualPower * timeInHours * (electricityCost / 1000);

        // Cálculo del costo del material
        const materialArea = materialWidth * materialHeight;
        const designArea = width * height;
        const materialUsagePercentage = designArea / materialArea;
        const materialCostUsed = materialCost * materialUsagePercentage;

        // Cálculo del desgaste de la máquina
        const totalCostBeforeMaintenance = energyCost + materialCostUsed;
        const maintenanceCost =
          totalCostBeforeMaintenance * maintenancePercentage;

        // Cálculo del costo final con margen de beneficio
        const totalCost = totalCostBeforeMaintenance + maintenanceCost;
        const finalCost = totalCost * (1 + profitMargin);

        return {
          ...state,
          general: {
            ...state.general,
            finalCost,
          },
        };
      } catch (error) {
        return {
          ...state,
          general: {
            ...state.general,
            finalCost: 0,
          },
        };
      }
    default:
      return state;
  }
}
