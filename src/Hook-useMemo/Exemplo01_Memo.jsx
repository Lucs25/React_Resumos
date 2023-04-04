//Trabalha com informações armazenadas, executa sempre que um componente é renderizado

import React, { useMemo, useState } from "react";

function Exemplo01_Memo() {
  const [contador, setContador] = useState(0);
  const [nomes, setNomes] = useState(["Lucas", "Ingrid", "Daniel"]);

  const listarSemRender = useMemo(() => {
    return <ListarNomes lista={nomes} />;
  }, [nomes]);

  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={(e) => setContador(contador + 1)}>Incrementar</button>
      {listarSemRender}
    </div>
  );
}

function ListarNomes({ lista }) {
  console.log("Componente listar nome criado!");
  return (
    <ul>
      {lista.map((nome) => (
        <li key={nome}>{nome}</li>
      ))}
    </ul>
  );
}

export default Exemplo01_Memo;
