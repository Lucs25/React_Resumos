//hook que retorna um callback memorizado, executado sempre que á um 'evento'
//SEM USE CALLBACK

//hook que retorna um callback memorizado, executado sempre que á um 'evento'
//SEM USE CALLBACK

import React, { useCallback, useEffect, useState } from "react";

function Exemplo02_Callback() {
  const [cor, setCor] = useState("blue");
  const [numero, setNumero] = useState(0);

  const alterarCor = () => {
    setCor(cor === "blue" ? "gray" : "blue");
  };

  const listarNumeros = useCallback(() => {
    return [numero - 1, numero, numero + 1];
  },[numero]);

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

export default Exemplo02_Callback;
