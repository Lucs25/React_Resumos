//Manipula elementos HTML sem precisar do render, afetando a performance do site. Utilizando para pequenas alterações no DOM

import React, { useRef } from "react";

function Exemplo01_Ref() {
  const elemento = useRef();//use ref aponta para "elemento"

  const acao = () => {
    elemento.current.focus();
    elemento.current.style.backgroundColor = " red";
  };

  return (
    <div>
      <input type="text" ref={elemento} />
      <input type="button" value="clique aqui" onClick={acao} />
    </div>
  );
}

export default Exemplo01_Ref;
