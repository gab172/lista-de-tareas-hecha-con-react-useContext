import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TareasContext } from "../Context/tareasContext";

const Formulario = () => {
  const { tareas, guardarTareas } = useContext(TareasContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submitTask = (data) => {
    data.id = Date.now();
    guardarTareas([...tareas, data]);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitTask)} className="mt-4">
        <div className="my-4">
          <label className="form-label" htmlFor="nombre">
            Nombre
          </label>

          <input
            type="text"
            className="form-control"
            id="nombre"
            placeholder="Nombre de la Tarea"
            {...register("nombre", {
              required: true,
              maxLength: 15,
            })}
          />
          {errors.nombre?.type === "required" && (
            <p>Este campo es obligatorio</p>
          )}
          {errors.nombre?.type === "maxLength" && (
            <p>La tarea no puede pasar de los 15 caracteres</p>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="descripcion">
            Descripcion
          </label>

          <textarea
            className="form-control"
            id="descripcion"
            cols="30"
            rows="10"
            placeholder="Descripcion de la tarea"
            {...register("descripcion", {
              required: true,
            })}
          ></textarea>
          {errors.descripcion?.type === "required" && (
            <p>Este campo es obligatorio</p>
          )}
        </div>
        <div className="d-grid gap-2">
          <input
            type="submit"
            value="Enviar"
            className="btn btn-primary p-2 mt-4"
          />
        </div>
      </form>
    </>
  );
};

export default Formulario;
