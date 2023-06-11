import React from "react";
const Equipe=(props)=>{
  return(
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
    </div>
  )
}

const Sobre=(props)=>{
  return(
    <div>
      <h1>Olá o meu nome é {props.nome}
      </h1>
      <h1>Minha profissão é {props.cargo}</h1>
      <h1>Tenho{props.idade} anos
      </h1>

    </div>
  )
}

export default function App() {
  return (
    <div>
      <h1>Vamos Montar Equipe:)</h1>
      <Equipe nome="ARI" cargo="Desenvolvedor" idade=" 29"/>
    </div>
  );
}
