import { useState ,useEffect} from "react";

function Time() {
    const [count, setCount] = useState(0);
    const [Calculation, setcalculation] = useState(0);
    const [modul, setmodul] = useState(0);

   useEffect( () => {
    setcalculation( () => count * 2);
   },[count]);

   useEffect ( () => {
      setmodul ( () => count / 2);
   }, [count]);

    return(
        <>
        <h3>count : {count}</h3>
        <button type="button" onClick={() => setCount((c) => c + 1)}>Add</button>
        <h3> Calculation : {Calculation}</h3>
        <h3> modal : {modul}</h3>
        </>
    );
};  




function Timer (){
    const [count, setcount] = useState(0)

  useEffect( () => {
    setTimeout( () => {
         setcount( (c) => c +1);
    },1000);

    return () => clearTimeout(Timer)
   },[] );

    return (
        <>
        <h1>hello {count}</h1>
        <Time/>
        </>
    )
     
};

export default Timer ;

