import React from "react";

export function Cars (props){
    return <h2>my data is {props.brand.name}</h2>
}
function Garage () {
    const Carname = { Modal:"ravi D.", name:'trushal'};
    return(
        <>
        <h1>my new leptop is </h1>
        <Cars brand={Carname}/>
        </>
    );

}
export default Garage ;