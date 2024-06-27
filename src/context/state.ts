import { Design, General, LaserValues, Material } from "./context";

export type AppState = {
  material: Material;
  design: Design;
  laser: {
    cut: LaserValues;
    engrave: LaserValues;
  };
  general: General;
};

export const initialAppState: AppState = {
  material: {
    materialCost: 56000,
    materialWidth: 400,
    materialHeight: 400,
  },
  design: {
    width: 0,
    height: 0,
    time: 0,
    length: 0,
  },
  laser: {
    cut: {
      power: 80,
      speed: 950,
      passes: 16,
    },
    engrave: {
      power: 80,
      speed: 3000,
      passes: 50,
    },
  },
  general: {
    electricityCost: 373,
    maintenancePercentage: 0.05,
    profitMargin: 0.3,
    finalCost: 0,
  },
};
