import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Formc1 extends Component {

    state = {
        FristName:'',
        Lastname:'',
        Adrees:'',
        MobaliNO:'',
        city:'',
       
       }

       hendal = (e) => {
         this.setState({...this.state,[ e.target.name]: e.target.value});

       }

       mysubmit = (e) => {
        e.preventDefault();

        console.log(this.state);

       }
       
  

  render() {
    return (
      <div>
        <form onSubmit={this.mysubmit}>
       
        
        <input type='text' value={this.state.FristName} name='FristName' placeholder='FristName' onChange={this.hendal}/>
        <input type='text' name='Lastname' placeholder='Lastname' onChange={this.hendal}/> 
        
        <input type='text' name='Adrees' placeholder='Adrees' onChange={this.hendal}/>
        <input type='text' name='MobaliNO' placeholder='MobaliNO' onChange={this.hendal}/> 
        <input type='text' name='city' placeholder='city' onChange={this.hendal}/> 
        <input type='submit'value='Save'/>
        </form>
      </div>
    )
  }
}
