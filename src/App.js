import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
       <div>
        email:
        <input type="email" name="email" value="teste@teste.com"/><br/>
        Senha:
        <input type="password" name="senha" value="123456" />

       </div>
    );
  }
}
export default App;
