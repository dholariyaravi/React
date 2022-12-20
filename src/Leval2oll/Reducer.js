import React, { useReducer, useState } from 'react'

export default function Reducer() {


    const argument = (state,action) => {

        switch(action.type){
            case "add":

            return [...state,action.payload];

            case 'delete':
                const mka = [...state]
                mka.splice(action.payload,1)
               return mka

            default:
                return state;
        }

    }

    const [data, setdata] = useState('');
    const [myad, setmyad] = useReducer(argument,[]);


    const myhedar = (e) => {
      setdata(e.target.value)
      console.log(e)
    }

    const myclick = () => {
        setmyad({type:'add',  payload: data})
        console.log(myad)
    }
    const mydelete = (index) => {
        setmyad({type:'delete',  payload: index})
    }

  return (
    <div>
        <input type='text' onChange={myhedar} />
        <input type='submit' onClick={myclick}/>

      {myad.map( (val,index) => {
         return(
            <div>
               <b> {val}</b>
            <input type='button' value='Delete' onClick={
                ()=> {mydelete(index) }} />
            </div>
         )
      })
      }
    </div>
  )
}
