import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./components/NavBar";
import Modulo from "./components/Modulo";
import Operaciones from "./pages/Operaciones";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Modulo href="/operaciones" descripcion="Control de operaciones"></Modulo>
      <Modulo href="#" descripcion="Control de mantenimiento"></Modulo>
      <Modulo href="#" descripcion="Registro de mantenimiento"></Modulo>
      <Modulo href="#" descripcion="Consumo de combustible y conductores"></Modulo>

    </>
  );
}

export default App;
