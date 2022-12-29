import React, { Component } from 'react'

export default class BuggyCounter  extends Component {

    constructor(props){
        super(props);
        this.state = {counter:0};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({counter: this.state.counter +1});
    }

  render() {
    if(this.state.counter === 3){
        throw new Error(' page not found');
    }

    return (
      <div>
        <h2 onClick={this.handleClick}>{this.state.counter}</h2>
         </div>
    )
  }
}
