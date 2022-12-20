import React from "react";
import { useState, useEffect } from "react";
import UseEfect1 from "./UseEfect1";

export default function DataUp() {
  const [text, setText] = useState("5");
  const [state, setstate] = useState("5");

  const myfun = (e) => {
    setText(e.target.value);
  };
  const clickk = (e) => {
    setstate(text);
  };

  return (
    <div>
      <input type="text" value={text} onChange={myfun} />
      <button onClick={clickk}>click</button>
      <h3>{state}</h3>
      <UseEfect1 data={state} />
 </div>
);
}