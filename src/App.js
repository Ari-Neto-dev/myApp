const Bemvindo=(props)=>{
return(
  <div>
    <h2>ola! moçada:{props.nome})</h2>
  </div>
);
}


export default function App(){
  return(
    <div>
      <h1>Bem Vindo ao Sistema</h1>
      <h2>@SujeitoProgramador:)</h2>
      <Bemvindo nome="Ariosvaldo"/>
    </div>
  )
}