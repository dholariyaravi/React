import React from "react";


 function EventNew() {
    const Chek = (a ,b) => {
        alert(b.type)
    }

   return(
    <button onClick={ (event) => Chek ('my new car', event)}> button</button>
   );
}




function Event() {
    const Click = (a) => {
        alert(a);
    }

    return (
        <>
        <button onClick={ () => Click ('green dosa!!!!')}>Click me</button>
        <EventNew/>
        </>
    )
}
export default Event;