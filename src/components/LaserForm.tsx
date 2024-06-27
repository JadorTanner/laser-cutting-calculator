// import { useAppContext } from "../context/AppContext";
import { useAppContext } from "../context/appContext";
import { AppActionsKinds } from "../context/actions";
import Card from "./Card";
import Input from "./Input";
import Tabs from "./Tabs";

const LaserForm = () => {
  const {
    state: { laser },
    dispatch,
  } = useAppContext();
  return (
    <Card>
      <Tabs
        defaultValue="engrave"
        tabs={[
          {
            label: "Corte",
            value: "cut",
            children: (
              <>
                {JSON.stringify(laser.cut)}
                <form
                  className="w-fit"
                  onInput={(e: any) => {
                    dispatch({
                      type: AppActionsKinds.UPDATE_LASER_CUT,
                      payload: {
                        ...laser.cut,
                        [e.target.name]: e.target.value,
                      },
                    });
                  }}
                >
                  <label>
                    Potencia de Corte (%):
                    <Input type="number" name="power" value={laser.cut.power} />
                  </label>
                  <label>
                    Velocidad de Corte (mm/min):
                    <Input type="number" name="speed" value={laser.cut.speed} />
                  </label>
                  <label>
                    Cantidad de Pasadas:
                    <Input
                      type="number"
                      name="passes"
                      value={laser.cut.passes}
                    />
                  </label>
                </form>
              </>
            ),
          },
          {
            label: "Grabado",
            value: "engrave",
            children: (
              <>
                {JSON.stringify(laser.engrave)}
                <form
                  className="w-fit"
                  onInput={(e: any) => {
                    dispatch({
                      type: AppActionsKinds.UPDATE_LASER_ENGRAVE,
                      payload: {
                        ...laser.engrave,
                        [e.target.name]: e.target.value,
                      },
                    });
                  }}
                >
                  <label>
                    Potencia de grabado (%):
                    <Input
                      type="number"
                      name="power"
                      value={laser.engrave.power}
                    />
                  </label>
                  <label>
                    Velocidad de grabado (mm/min):
                    <Input
                      type="number"
                      name="speed"
                      value={laser.engrave.speed}
                    />
                  </label>
                  <label>
                    Cantidad de pasadas:
                    <Input
                      type="number"
                      name="passes"
                      value={laser.engrave.passes}
                    />
                  </label>
                </form>
              </>
            ),
          },
        ]}
      ></Tabs>
    </Card>
  );
};

export default LaserForm;
