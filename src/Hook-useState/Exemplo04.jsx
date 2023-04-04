//criação de objeto para API
import React, { useState } from "react";


function Exemplo04() {
  //modelo JSON
  const modelo = {
    nome: "",
    email: "",
    cidade: "",
  };

  const [formulario, setFormulario] = useState(modelo);

  //evento
  const evento = (e) => {
    let nome = e.target.name;
    let valor = e.target.value;

    setFormulario({ ...formulario, [nome]: valor });
  };

  return (
    <div>
      <input type="text" name="nome" placeholder="Nome" onChange={evento} />
      <input type="email" name="email" placeholder="Email" onChange={evento} />
      <input type="text" name="cidade" placeholder="Cidade" onChange={evento} />
      <p>{formulario.nome}</p>
      <p>{formulario.email} </p>
      <p>{formulario.cidade} </p>

      <p>{JSON.stringify(formulario)}</p>
    </div>
  );
}

export default Exemplo04;
