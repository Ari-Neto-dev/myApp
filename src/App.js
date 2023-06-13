import React,{Component} from "react";

class Equipe extends Component{
  render(){
  return(
    <div>
      <h2>Olá eu sou o {this.props.nome}</h2>
      <h2>A minha ocupação é {this.props.cargo}</h2>
      <h2>E tenho {this.props.idade} anos </h2>
    </div>
  )
}
}


export default function App() {
  return (
    <div>
      <h1>Vamos para cima</h1>
      <Equipe nome="Ari" cargo="programador" idade= "70"/>
     
     

    </div>
  );
}
