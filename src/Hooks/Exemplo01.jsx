import React from "react";

function Exemplo1_useState() {
  const [texto, setTexto] = React.useState("hello word");

  const evento = (event) => {
    setTexto(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={evento} />
      <p>{texto}</p>
    </div>
  );
}

export default Exemplo1_useState;
