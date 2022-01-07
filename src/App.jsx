import "./App.css";
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import ListaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./comunicacao/DiretaPai";
import IndiretaPai from "./comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

export default function App(props) {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">
        <Card titulo="#16 - Mega" color="#964587">
          <Mega qtde={6} />
        </Card>

        <Card titulo="#15 - Contador" color="#800000">
          <Contador numeroInicial={10} />
        </Card>

        <Card titulo="#14 - Input" color="#C71585">
          <Input />
        </Card>

        <Card titulo="#13 - Comunicação Indireta" color="#6A5ACD">
          <IndiretaPai />
        </Card>

        <Card titulo="#12 - Comunicação Direta" color="#7B68EE">
          <DiretaPai />
        </Card>

        <Card titulo="#11 - Renderização condicional (IF)" color="#4B0082">
          <UsuarioInfo usuario={{ nome: "Bruno" }} />
          <UsuarioInfo usuario={{ email: "silva.dev@hotmail.com" }} />
        </Card>

        <Card titulo="#10 - Renderização condicional" color="#00BFFF">
          <ParOuImpar numero={20} />
        </Card>

        <Card titulo="#09 - Desafio Repetição (produtos)" color="#FF1493">
          <ListaProdutos />
        </Card>

        <Card titulo="#08 - Repetição (alunos)" color="#FF4500">
          <ListaAlunos />
        </Card>

        <Card titulo="#07 - Componentes Filhos" color="#839">
          <Familia sobrenome="Sanches Silva">
            <FamiliaMembro nome="Felipe Miguel " />
            <FamiliaMembro nome="Caleb " />
            <FamiliaMembro nome="Joshua " />
          </Familia>
        </Card>

        <Card titulo="#06 - Alteração de Cores" color="#900">
          <p>
            Inserindo color atráves da propriedade color="" e trazendo da props.
          </p>
        </Card>

        <Card titulo="#05 - Display Responsivo com FlexBox" color="#879">
          <p>Utilização da responsividade com FlexBox</p>
        </Card>

        <Card titulo="#04 - Desafio Aleatório" color="#689">
          <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="#03 - Fragmento" color="#179">
          <Fragmento />
        </Card>

        <Card titulo="#02 - Com Parâmetro" color="#009">
          <ComParametro
            titulo="Curso React Udemy"
            subtitulo="Bruno Silva"
            nota={9.3}
          />
        </Card>

        <Card titulo="#01 - Primeiro Componente" color="#001">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
}
