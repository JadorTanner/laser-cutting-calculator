import Input from "./Input";
import Card from "./Card";
import { AppActionsKinds } from "../context/actions";
import { useAppContext } from "../context/appContext";

const MaterialForm = () => {
  const {
    state: { material },
    dispatch,
  } = useAppContext();

  return (
    <>
      <Card>
        <form
          onChange={(e: any) => {
            dispatch({
              type: AppActionsKinds.UPDATE_MATERIAL,
              payload: {
                ...material,
                [e.target.name]: e.target.value,
              },
            });
          }}
        >
          <label>
            Costo del Material (Gs):
            <Input
              type="number"
              name="materialCost"
              value={material.materialCost}
            />
          </label>
          <label>
            Largo del Material:
            <Input
              type="number"
              name="materialWidth"
              value={material.materialWidth}
            />
          </label>
          <label>
            Ancho del Material:
            <Input
              type="number"
              name="materialHeight"
              value={material.materialHeight}
            />
          </label>
        </form>
      </Card>
    </>
  );
};

export default MaterialForm;
