//Utlizando useEffect
//Executado após o render ser realizado

import React, { useEffect, useState } from "react";

function Exemplo01() {
  const [text, setText] = useState("Hello Word");

  useEffect(() => {
    setInterval(() => {
      setText("UseEffect executado com sucesso");
    }, 5000);
  });

  return <div>{text}</div>;
}

export default Exemplo01;
