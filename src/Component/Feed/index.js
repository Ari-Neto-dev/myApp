import React,{Component} from "react";
class Feed extends Component{
  render(){
    return(
      <div key={this.props.id}>
        <h3>{this.props.username}</h3>
        <h6>{this.props.curtidas} curtidas/ {this.props.comentarios} comentários</h6>

      </div>
    );
  }

}
export default Feed;