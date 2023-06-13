import React from "react";
const Zabumba=(props)=>{
  return(
    <div>
      <Zarzur nome={props.nome}/>
    </div>
  )
}

  const Zarzur=(props)=>{
    return(
      <div>
        <h1>Agora vai o meu nome é {props.nome}</h1>
      </div>
    )
  }

export default function App() {
  return (
    <div>
      <h1>Vamos para cima</h1>
      <Zabumba nome="Ari"/>
     

    </div>
  );
}
