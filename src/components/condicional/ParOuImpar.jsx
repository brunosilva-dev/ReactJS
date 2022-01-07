import React from "react";

export default (props) => {
  const ParImpar = props.numero % 2 === 0;
  return <div>{ParImpar ? <span>Par</span> : <span>Ímpar</span>}</div>;
};

