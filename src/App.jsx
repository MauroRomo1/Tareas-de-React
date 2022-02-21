import React from "react";
import Mensaje from "./components/Mensaje";

const App = () => {
  // Aquí va el codigo de Javascript (funciones,variables, etc)
  const nombre = "My Friend";

  return (
    //   Aquí va todo lo que se va a renderizar (JSX)
    <div>
      <Mensaje dato={nombre} />
    </div>
  );
};

export default App;
