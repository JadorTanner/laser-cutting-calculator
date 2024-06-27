import { useAppContext } from "../context/appContext";
import { AppActionsKinds } from "../context/actions";
import Card from "./Card";
import Input from "./Input";

const GeneralForm = () => {
  const {
    state: { general },
    dispatch,
  } = useAppContext();
  return (
    <Card>
      <form
        onChange={(e: any) => {
          dispatch({
            type: AppActionsKinds.UPDATE_SETTINGS,
            payload: {
              ...general,
              [e.target.name]: parseFloat(e.target.value),
            },
          });
        }}
      >
        <label>
          Costo de Electricidad (Gs/kWh):
          <Input
            type="number"
            name="electricityCost"
            value={general.electricityCost}
          />
        </label>
        <label>
          Porcentaje de Mantenimiento:
          <Input
            type="number"
            name="maintenancePercentage"
            value={general.maintenancePercentage}
          />
        </label>
        <label>
          Margen de Beneficio:
          <Input
            type="number"
            name="profitMargin"
            value={general.profitMargin}
          />
        </label>
      </form>
    </Card>
  );
};

export default GeneralForm;
