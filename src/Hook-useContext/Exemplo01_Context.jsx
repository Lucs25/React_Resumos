//Aceita um objeto do contexto e retorna o valor atual do contexto
//Utilizado para passar dados de um componente para o outro, sem a necessidade de ser um elemento pai para filho(elemento A tem acesso ao F)
import React, { createContext, useContext, useState } from "react";

const Contexto = createContext();

function Exemplo01_useContext() {
  let texto = "Enviando informações";

  const [fundo, setFundo] = useState("yellow");

  const alterarFundo = () => {
    setFundo(fundo === "yellow" ? "blue" : "yellow");
  };

  return (
    <Contexto.Provider value={{ texto, fundo, alterarFundo }}>
      <Camada1 />
    </Contexto.Provider>
  );
}

function Camada1() {
  return (
    <div
      style={{
        background: "red",
        width: "500px",
        height: "500px ",
        display: "inline-block",
      }}
    >
      <Camada2 />
    </div>
  );
}

function Camada2() {
  return (
    <div
      style={{
        background: "green",
        width: "400px",
        height: "400px ",
        margin: "50px",
      }}
    >
      <Camada3 />
    </div>
  );
}

function Camada3() {
  const { texto, fundo, alterarFundo } = useContext(Contexto);

  return (
    <div
      style={{
        background: fundo,
        width: "300px",
        height: "300px ",
        margin: "50px",
        display: "inline-block",
      }}
    >
      <p>{texto}</p>
      <button onClick={alterarFundo}>Clique Aqui</button>
    </div>
  );
}

export default Exemplo01_useContext;
