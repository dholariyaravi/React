import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Calss2 from './Calss2'

export default class Calsscomp extends Component {
   constructor() {
     super();
     this.state = {
        array: [], 
        taxname:" " };
   }
 
   onchenj1 =(e) => {
    this.setState({ [e.target.name]: e.target.value });
   
   }
    
   displayclick = (e) =>{
    e.preventDefault();

    let a = [...this.state.array]
    a.push(this.state.taxname);

    this.setState({...this.state, 'array': a})
   }

  render() {
    return (
      <div>
        <input type='text' name='taxname' onChange={this.onchenj1}/>
        <button onClick={this.displayclick}> click </button>
          {this.state.array}

        <Calss2/>
      </div>
     
    )
  }
}

