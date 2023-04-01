import React from "react";

function Exemplo02_useState() {
  const [nome, setNome] = React.useState(" ");
  const [idade, setIdade] = React.useState(0);

  return (
    <div>
      <input
        type="text"
        placeholder="Nome"
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="number"
        placeholder="Idade"
        onChange={(e) => setIdade(e.target.value)} 
      />

      <p>{nome} </p>
      <p>{idade} </p>
    </div>
  );
}

export default Exemplo02_useState;
