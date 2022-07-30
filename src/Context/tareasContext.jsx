import { createContext, useState } from "react";

export const TareasContext = createContext();

const TareasProvider = (props) => {
  const tareasInicales = JSON.parse(localStorage.getItem("tareas"));
  const [tareas, guardarTareas] = useState(tareasInicales);
  
  if(tareasInicales === null){
    localStorage.setItem("tareas", JSON.stringify([]))
  }else{
    localStorage.setItem("tareas", JSON.stringify(tareas))
  }
  return (
    <TareasContext.Provider
      value={{
        tareas,
        guardarTareas,
      }}
    >
      {props.children}
    </TareasContext.Provider>
  );
};

export default TareasProvider;
