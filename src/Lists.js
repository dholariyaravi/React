 import React from 'react'

  function Keyis (props){
    return <li> my key is {props.brand}</li>
  }

   function Newkey (){
    const Data = [
        {id: 1, brand:'Audi'},
        {id: 2, brand:'BMW'},
        {id: 3, brand:'Thar'},
        {id: 4, brand:'KIV'},
        {id: 5, brand:'Audi700'}
    ];
    return(
        <>
        <h1>my new 2 Cars in ....key</h1>
        <ul>
           {Data.map((pass) => <Keyis  Key={pass.id}  brand={pass.brand} />)}
        </ul>
        </>
    );
  }


 //   +++++++++++++++==================+++++++++++++++++++++++++========


  function NewLi (props) {
    return (
       <li>my new {props.bsa}</li> 
   );
  }

  export default function Liston () {
     const Nex = ['Audi','BMW','THar','KIV'];
     return(
        <>
        <h1>my new Cars is...... List</h1>
        <ul>{Nex.map( (p) => < NewLi bsa={p} />)}</ul>
        <Newkey/>
        </>
     );
  }



