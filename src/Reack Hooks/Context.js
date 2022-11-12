import {useState, createContext, useContext} from 'react'

const User = createContext();

function Componet1(){
    const [use, setuse] = useState ('ravi');
 //  =============++++++++++++++++---------------- creat context ^^

 //  context provider .......... 
    
 return (
    <>
    <User.Provider value={use}>
        <h1> Hello my name {use}</h1>
        < Componet2 />
    </User.Provider>
    </>
  );
 };

 function Componet2(){
    return(
        <>
         <h2> this is Componet2</h2>
        <Componet3/>
        </>  
      )
    };

 function Componet3() {
    return( 
       <>
         <h2>this is Componet3</h2>
         <Componet4/>
       </> 
    );
 };

 function Componet4(){
    return(
        <>
         <h2>this is Component4</h2>
         <Componet5/>
        </>
    );
 };

 function Componet5() {
      const use = useContext(User);
    return(
        <>
         <h2>this is Component5</h2>
        <h1> Hello {use} !!!!</h1>
        </>
    );
 };
  export default Componet1 ;

