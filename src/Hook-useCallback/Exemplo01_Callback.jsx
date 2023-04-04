//hook que retorna um callback memorizado, executado sempre que á um 'evento'
//SEM USE CALLBACK

import React, { useEffect, useState } from "react";

function Exemplo01_Callback() {
  const [cor, setCor] = useState("blue");
  const [numero, setNumero] = useState(0);

  const alterarCor = () => {
    setCor(cor === "blue" ? "gray" : "blue");
  };

  const listarNumeros = () => {
    return [numero - 1, numero, numero + 1];
  };

  return (
    <div style={{ backgroundColor: cor }}>
      <button onClick={alterarCor}> alterar cor </button>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(parseInt(e.target.value))}
      />
      <ComponenteListarNumeros lista={listarNumeros} />
    </div>
  );
}

function ComponenteListarNumeros({ lista }) {
  const [vetor, setVetor] = useState([]);
  useEffect(() => {
    console.log("componente criado");
    setVetor(lista);
  }, [lista]);

  return (
    <ul>
      {vetor.map((n) => (
        <li key={n}>{n}</li>
      ))}
    </ul>
  );
}

export default Exemplo01_Callback;
