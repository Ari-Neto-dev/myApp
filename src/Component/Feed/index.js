import React,{Component} from "react";
class Feed extends Component{
  render(){
    return(
      <div key={this.props.id}>
        <h3>{this.props.username}</h3>
        <h6>{this.props.curtidas > 1 ? this.props.curtidas + ' curtidas': this.props.curtidas + ' curtida'} </h6>

      </div>
    );
  }

}
export default Feed;