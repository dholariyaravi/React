import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Calss2 from './Calss2'

export default class Input11 extends Component {
  constructor(){
    super();
    this.state = {
        array: [],
        taxname: '',
    }
} 
  hendal = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }

   Myclick = (e) => {
   e.preventDefault();
    
    let a = [...this.state.array]
     a.push (this.state.taxname);
 
     this.setState({...this.state, 'array' : a})

   }

  
     
  render() {
    return (
      <div>  
   
      <input type='text' name='taxname' onChange={this.hendal}/>
       <button type='button' onClick={this.Myclick}>cilck me</button>
       {this.state.array}
      
       <Calss2/>
      
      </div>
    )
  }
}
