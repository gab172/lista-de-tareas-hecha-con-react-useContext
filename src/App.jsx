import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { v4 as uuid } from 'uuid'
import Formulario from "./components/Formulario";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Tarea from "./components/Tarea";
import TareasProvider from "./Context/tareasContext";

function App() {
  return (
    <TareasProvider>
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newTask" element={<Formulario />} />
            <Route path="/task" element={<Tarea key={uuid()} />} />
            <Route path="*" element={<Navigate path="/" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TareasProvider>
  );
}

export default App;
