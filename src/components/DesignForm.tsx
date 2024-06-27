import Input from "./Input";
import Card from "./Card";
import { useAppContext } from "../context/appContext";
import { AppActionsKinds } from "../context/actions";

const DesignForm = () => {
  const {
    state: { design },
    dispatch,
  } = useAppContext();

  return (
    <>
      <Card>
        <form
          onChange={(e: any) => {
            dispatch({
              type: AppActionsKinds.UPDATE_DESIGN,
              payload: { ...design, [e.target.name]: e.target.value },
            });
          }}
        >
          <label>
            Ancho del Diseño (mm):
            <Input type="number" name="width" value={design.width} />
          </label>
          <label>
            Alto del Diseño (mm):
            <Input type="number" name="height" value={design.height} />
          </label>
          <label>
            Tiempo de Corte (min):
            <Input type="number" name="time" value={design.time} />
          </label>
        </form>
      </Card>
    </>
  );
};

export default DesignForm;
