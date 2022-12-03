import PropTypes from 'prop-types'
import React, { Component } from 'react'
import axios from 'axios'
import Class2 from '../Class/Class2'

export default class Classapi extends Component {

   state = {
    recors : []
   };

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(p => {
            this.setState({recors : p.data});
        })
    };

  render() {
    return (
      <div>
        {this.state.recors.map((val) => {
            return(
            <div> 
                <Class2 myitem={val}></Class2>
            </div>) 
        })}
      </div>
    )
  }
}
