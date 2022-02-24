import React, { useState } from "react";
import TodoCard from "./TodoCard";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");

  const [tareas, setTareas] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newArray = [...tareas, inputValue] // newArray.reverse()
    setTareas([...tareas, inputValue]);
    setInputValue("");
  };

  const borrarTarea = (indice) => {
    const tareasPendientes = [...tareas];
    tareasPendientes.splice(indice, 1);
    setTareas(tareasPendientes);
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 col-md-6 offset-md-3">
          <h1 className="text-center text-uppercase fw-bolder">
            Bienvenido! 🎉
          </h1>
          <h3>Lista de tareas</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <TodoForm
            handleSubmit={handleSubmit}
            inputValue={inputValue}
            handleChange={handleChange}
          />

          <p className="mt-2">Tareas pendientes: {tareas.length}</p>
        </div>
        <div className="col-12 col-md-6 offset-md-3 my-3">
          {tareas.map((tarea, index) => (
            <TodoCard
              key={index}
              tarea={tarea}
              borrarTarea={borrarTarea}
              indice={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
