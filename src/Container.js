  import React, { Component } from "react";

 export class Container extends Component{
      constructor(props){
        super(props);
           this.state = {show:true};
      }

      delHeader = () => {
        this.setState({show:false});
      }

      render(){
        let Myheader;
        if (this.state.show){
            Myheader = <Child />;
        }
        return(
            <>
            {Myheader}
            <button type="button" onClick={this.delHeader}>Delete Header</button>
            </>
        );
      }      
  } 

  export class Child extends Component{
     componentWillUnmount(){
      alert('the compnent  named Header is about to bo unmounted.');    
     }
     render(){
        return(
            <h1>Hello World.</h1>
        );
     }
  }