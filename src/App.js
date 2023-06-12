import React from "react";
const Equipe=(props)=>{
  return(
    <div>
      <Exclusivo nome={props.nome} cargo={props.cargo} idade={props.idade}/>
    </div>
  )
}

  const Exclusivo=(props)=>{
    return(
      <div>
      <h1>Meu nome é {props.nome}</h1>
      <h1>Eu trabalho como programador{props.cargo}</h1>
      <h1>Eu tenho {props.idade} anos</h1>
      </div>
    )
    
  }


export default function App() {
  return (
    <div>
      <h1>Vamos Montar Equipe:)</h1>
     <Equipe nome="ARI" cargo="Desenvolvedor" idade="39"/>
    </div>
  );
}
