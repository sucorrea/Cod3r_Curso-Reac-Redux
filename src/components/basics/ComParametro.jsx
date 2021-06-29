import React from "react";

export default function ComParametro(props) {
  const status = props.nota >= 7 ? "Aprovado" : "Recuperação";
  const notaInt = Math.ceil(props.nota);
  return (
    <div>
      <h2>{props.titulo}</h2>
      <h3>
        <strong>ALUNO: {props.aluno}</strong>
        <p> Nota: {notaInt}</p>e está <strong>{status}</strong>
      </h3>
    </div>
  );
}
