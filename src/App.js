import React, { Component } from "react";
import Feed from "./Component/Feed";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed:[
        {id:1, username:'Ariosvaldo',curtidas:'10',comentarios:2},
        {id:2, username:'Lucas',curtidas:'120',comentarios:24},
        {id:3, username:'Amanda',curtidas:'30',comentarios:12},
        {id:4, username:'Silvia',curtidas:'1',comentarios:0},
        {id:5, username:'Rosa',curtidas:'100',comentarios:8},
        {id:6, username:'Maria',curtidas:'99',comentarios:10},


        
      ]

    };
  }

  render(){
    return(
      <div>
        {this.state.feed.map((item)=>{
          return(
           <Feed id={item.id} username={item.username} curtidas={item.curtidas}
           comentarios={item.comentarios}/>
         
          );
        })}

      </div>
    );
  }
}

export default App;
