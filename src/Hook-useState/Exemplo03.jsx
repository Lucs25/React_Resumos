import React, { useState } from "react";

function Exemplo3_useState() {
  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);

  let media = (nota1 + nota2) / 2;

  let situacao = media > 7 ? "Aprovado(a)" : "Reprovado(a)";

  return (
    <div>
      <input
        type="number"
        onChange={(e) => setNota1(+e.target.value)} //+ converte string em number
        placeholder="primeira nota"
      />
      <input
        type="number"
        onChange={(e) => setNota2(+e.target.value)}
        placeholder="segunda nota"
      />

      {nota1 && nota2 ? <h1>{situacao} com média {media} </h1>: ''}
    </div>
  );
}

export default Exemplo3_useState;
