import "./css/App.css";
import MaterialForm from "./components/MaterialForm";
import LaserForm from "./components/LaserForm";
import Forms from "./components/Forms";
import ContextProvider from "./context/appContext";

const App: React.FC = () => {
  return (
    <ContextProvider>
      <div className="App flex flex-col items-center justify-center">
        <h1>Calculadora de Corte/Grabado Láser</h1>
        <Forms />
      </div>
    </ContextProvider>
  );
};

export default App;
