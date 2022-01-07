import React from "react";

export default (props) => {
  // const min = props.min;
  // const max = props.max;
  // const [a, b] = [1, 2]; puro JS
  // const { c, d, x } = { c: 3, d: 7, x: "Teste" }; puro JS

  const { min, max } = props; //destructor

  const aleatorio = parseInt(Math.random() * (max - min)) + min;
  return (
    <div>
      <h2>Valor Aleatorio</h2>
      <p>
        <strong>Valor Minimo:</strong>
        {min}
      </p>
      <p>
        <strong>Valor Máximo:</strong>
        {max}
      </p>
      <p>
        <strong>Valor Escolhido:</strong>
        {aleatorio}
      </p>
    </div>
  );
};
