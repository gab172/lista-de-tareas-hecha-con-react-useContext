import { useContext } from "react";
import { TareasContext } from "../Context/tareasContext";


const Tarea = () => {
  const { tareas, guardarTareas } = useContext(TareasContext);

  const elminarTarea = (id) => {
    const tarea = tareas.filter(tarea => tarea.id === id);
    guardarTareas(tarea);
  };

  return tareas.map((tarea) => (
    <>
      <div className="card mt-4">
        <div className="card-header">Tarea</div>
        <div className="card-body">
          <h3 className="card-title">{tarea.nombre}</h3>
          <p className="card-text">{tarea.descripcion}</p>
          <button className="btn btn-danger" onClick={() => elminarTarea(tarea.id)}>
            Eliminar
          </button>
        </div>
      </div>
    </>
  ));
};

export default Tarea;
