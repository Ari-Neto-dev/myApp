import React,{Component} from "react";


class Membro extends Component{

  constructor(props){
    super(props);
    this.state={
      nome:props.nome
    };
    this.entrar=this.entrar.bind(this);
  }
  
  entrar(){
    this.setState({nome:" Ariosvaldo"})
  }
  render(){
    return(
      <div>
        <h2>Bem Vindo{this.state.nome}</h2>
        <button onClick={this.entrar}>
          Entrar como Ari
        </button>

        <button onClick={()=>this.setState({nome:''})}>
          Sair
        </button>

      </div>
    );
  }
}


export default Membro;