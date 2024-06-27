import MaterialForm from "./MaterialForm";
import LaserForm from "./LaserForm";
import DesignForm from "./DesignForm";
import GeneralForm from "./GeneralForm";
import { useAppContext } from "../context/appContext";

const Forms = () => {
  // const { design, general, laser, material } = useAppContext();
  const {
    state: { design, general, laser, material },
  } = useAppContext();
  return (
    <>
      <div className="flex flex-row gap-5">
        <LaserForm />
        <GeneralForm />
        <MaterialForm />
        <DesignForm />
      </div>
      <ul className="flex gap-4">
        <li>
          Design:
          <ul>
            <li>height: {design.height}</li>
            <li>width: {design.width}</li>
            <li>length: {design.length}</li>
            <li>time: {design.time}</li>
          </ul>
        </li>
        <li>
          General:
          <ul>
            <li>electricityCost: {general.electricityCost}</li>
            <li>finalCost: {general.finalCost}</li>
            <li>maintenancePercentage: {general.maintenancePercentage}</li>
            <li>profitMargin: {general.profitMargin}</li>
          </ul>
        </li>
        <li>
          Laser:
          <ul>
            <li>
              Cut: {laser.cut.passes}, {laser.cut.power}, {laser.cut.speed}
            </li>
            <li>
              Engrave: {laser.engrave.passes}, {laser.engrave.power},{" "}
              {laser.engrave.speed}
            </li>
          </ul>
        </li>
        <li>
          Material:
          <ul>
            <li>materialCost: {material.materialCost}</li>
            <li>materialHeight: {material.materialHeight}</li>
            <li>materialWidth: {material.materialWidth}</li>
          </ul>
        </li>
      </ul>
      <h2>Costo Estimado: {Math.round(general.finalCost)} Gs</h2>
    </>
  );
};

export default Forms;
