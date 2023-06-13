import React,{Component} from "react";

class Equipe extends Component{
  render(){
  return(
    <div>
      <Sobre nome={this.props.nome}
      ocupacao={this.props.cargo}
      idade={this.props.idade}/>
      <Social/>
    </div>
  )
}
}

class Sobre extends Component{
  render(){
    return(
      <div>
          <h1>O meu nome é:{this.props.nome}</h1>
        <h1>Mimha profissão é :{this.props.ocupacao}</h1>
        <h1>E tenho {this.props.idade}</h1>
      </div>
    )
  }
}

  const Social=(props)=>{
    return(
      <div>
        <href>https://www.google.com</href>
        <br/>
        <href>https://www.facebook.com</href>
      </div>
    )
  }

export default function App() {
  return (
    <div>
      <h1>Vamos para cima</h1>
      <Equipe nome="Ari" cargo="programador" idade= "70"/>
     
     

    </div>
  );
}
