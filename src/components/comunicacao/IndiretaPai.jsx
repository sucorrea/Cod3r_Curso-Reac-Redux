import React, { useState } from "react";

import IndiretaFilho from "./IndiretaFilho";

const IndiretaPai = props => {
  const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)
    
    function fornInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }
  return (
    <div>
      <div>
        <span> {nome} </span>
        <span> {idade} </span>
        <span> {nerd ? "Verdadeiro" : "Falso"}</span>
      </div>
      <div>Pai</div>
      <IndiretaFilho quandoClicar={fornInformacoes} />
    </div>
  );
};

export default IndiretaPai;
