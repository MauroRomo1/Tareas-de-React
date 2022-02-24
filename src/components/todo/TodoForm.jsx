import React from "react";

const TodoForm = ({ handleSubmit, inputValue, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-control"
        type="text"
        placeholder="Ingrese la tarea..."
        required
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
};

export default TodoForm;
