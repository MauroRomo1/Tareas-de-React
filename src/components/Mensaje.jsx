import React, { useState } from "react";

const Mensaje = (props) => {
  const [message, setMessage] = useState("");

  const { dato } = props;

  const addMessage = () => {
    setMessage("from changed state");
  };
  return (
    <div>
      <h1>
        Hello {dato}! {message}
      </h1>
      <button onClick={addMessage}>Click me</button>
    </div>
  );
};

export default Mensaje;
