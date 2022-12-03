import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Class2 extends Component {
  

  render() {

    return (
        <table>
            <tr>
            <td>{this.props.myitem.name}</td></tr> <hr/>  
             <td>{this.props.myitem.id}</td>
            

        </table>
     
    )
  }
}
