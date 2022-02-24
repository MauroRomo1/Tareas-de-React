import React, { useState } from "react";

const Mensaje = (props) => {
  const [message, setMessage] = useState("");

  const { dato } = props;

  const addMessage = () => {
    setMessage("from changed state");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <h1 className="text-center">
            Hello {dato}! {message}
          </h1>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary mt-3" onClick={addMessage}>
              Click me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mensaje;
