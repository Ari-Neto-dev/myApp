import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };

    this.sair = this.sair.bind(this);
    this.entrar = this.entrar.bind(this);
  }
  sair(){
    this.setState({status: false});
  }

  entrar(){
    this.setState({status:true});
  }

  render() {
    return (
      <div>
       {this.state.status ?
       <div>
        <h2>Bem vindo ao Sistema</h2>
        <button onClick={this.sair}>SAIR</button>
       </div>:
       <div>
        <h2>Olá visitante faça o login</h2>
        <button onClick={this.entrar}>Entrar no Sistema</button>
       </div>
      }
      </div>
    );
  }
}

export default App;
