import React from "react";

const TodoCard = (props) => {
  const { tarea, indice, borrarTarea } = props;
  return (
    <div className="card text-black mb-2">
      <div className="card-body d-flex align-items-center justify-content-between">
        <span>{tarea}</span>
        <button
          className="btn btn-danger btn-sm rounded"
          onClick={() => borrarTarea(indice)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
