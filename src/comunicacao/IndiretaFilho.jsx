import React from "react";

export default (props) => {
  const cb = props.quandoClicar;
  const gerarIdade = () => parseInt(Math.random() * 20) + 50;
  const geraNerd = () => Math.random() > 0.8;
  return (
    <div>
      <div>Filho</div>
      <button
        onClick={(_) => {
          cb("João", gerarIdade(), geraNerd());
        }}
      >
        Fornecer Informações
      </button>
    </div>
  );
};
