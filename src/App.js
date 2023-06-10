import React from 'react';

const Bemvindo=(props)=>{
  return(
    <div>
      <h2>Bemmm vindo:{props.nome}</h2>
      <h2>Minha idade é:{props.idade}</h2>
      <h2>Minha profissão é:{props.cargo}</h2>

    </div>
  )
}



export default function App(){
  return(
    <div>
      <h1>Bem Vindo ao Sistema</h1>
      <Bemvindo nome="Ari" idade="26"cargo="desenvolvedor Jr"/>
      <Bemvindo nome="Sara" idade="33" cargo="desenvolvedor Master" />
      <Bemvindo nome="Rafa" idade="12" cargo="desenvolvedor Senior"/>


    </div>
  )
}