import React from "react";

const Cadastro=(props)=>{
  return(
    <div>
      <strong>
        <h1>Gostaria de me apresentar, sou o {props.nome} minha profissão é {props.atividade} e tenho muita experência com{props.biblioteca} </h1>
      </strong>
    </div>
  )
}


export default function App() {
  return (
    <div>
      <h1>Bem Vindo ao Sistema</h1>
      <Cadastro nome="Ari" atividade="desenvolvedor" biblioteca=" REACT"/>
    
    </div>
  );
}
