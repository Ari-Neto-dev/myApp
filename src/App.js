import React, { Component } from "react";

class Resumo extends Component {
  render() {
    return (
      <div>
        <Agora nome={this.props.nome}
         cargo={this.props.cargo}
         idade={this.props.idade}/>
      </div>
    );
  }
}

class Agora extends Component{
  render(){
    return(
      <div>
        <h1>O meu nome é {this.props.nome}</h1>
        <h3>Atualmente trabalho com {this.props.cargo}</h3>
        <h4>Tenho {this.props.idade} anos</h4>
      </div>
    )
  }
}




export default function App() {
  return (
    <div>
      <h1>olá! Mundo, eu estou aqui.</h1>
      <Resumo nome="ARI" cargo=" DEV" idade=" 30" />
    </div>
  );
}
