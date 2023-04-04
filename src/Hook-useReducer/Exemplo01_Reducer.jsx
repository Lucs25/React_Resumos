//Sugerido utilizar junto com use state quando se tem uma lógica complexa com multiplos sub valores, algo além de atribuir um novo valor no useState (estrutura condicional, vetores); Toda func com useReducer utilizará 2 parametros ; não é

import React, { useReducer } from "react";

function Exemplo01_Reducer() {
  const funcao = (state, acao) => {
    switch (acao) {
      case "incrementar":
        return state + 1;
      case "decrementar":
        return state - 1;
      default:
        return 0;
    }
  };

  const [contador, executarFuncao] = useReducer(funcao, 10);

  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={(e) => executarFuncao("incrementar")}>
        Incrementar
      </button>
      <button onClick={(e) => executarFuncao("decrementar")}>
        Decrementar
      </button>
    </div>
  );
}

export default Exemplo01_Reducer;
