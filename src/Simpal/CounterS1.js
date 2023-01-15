import React from 'react'

export default function CounterS1(props) {


   return (
    <div>    
      {props.rodet.map((index , val)=> {
        return(
           <div>
            {val.Fname}{val.nuber} {val.addres}{val.city}{val.counter}

            <button onClick={() => props.remove(index)} className="btn btn-dark m-1">delet</button>
            <button onClick={() => props.add(index)} className="btn btn-dark m-1">Edit</button>
            
            </div>
        )

      })}

    </div>
    
  );
}
