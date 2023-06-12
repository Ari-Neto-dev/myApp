import React, {Component} from "react";


class Equipe extends Component{
  render(){
    return(
      <div>
        <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
        <hr/>
      </div>
    )
  }
}

class Sobre extends Component{
  render(){
    return(
      <div>
        <h2>Olá eu sou{this.props.nome} </h2>
        <h2>Minha ocupação:{this.props.cargo}</h2>
        <h2>Eu tenho{this.props.idade} anos</h2>
      

      </div>
    );
}
}


export default function App() {
  return (
    <div>
      <h1>Agora é para Valer!</h1>
      <Equipe nome=" Ari" cargo="Programador" idade="100"/>
      <Equipe nome=" Joaquin" cargo="Gerente" idade=" 50"/>

    </div>
  );
}
