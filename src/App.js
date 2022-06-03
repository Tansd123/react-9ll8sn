import React, { useInsertionEffect, useState } from "react";
import "./style.css";

export default function App() {
  const [a, Seta] = useState(0);
  const [b, Setb] = useState(0);
  const [show, setshow] = useState(false);
  const sum = (a, b) => {
    return Number(a) + Number(b);
  }
  return (
    <>
    <input type="number" onChange={e => (Seta(e.target.value), setshow(false))}/>
    <input type= "number" onChange={e => (Setb(e.target.value), setshow(false))}/>
    <button type= "button" onClick={() => setshow(!show)}>
     {show === true ? "Sended" : "Send" }
    </button>
      {show && <p>{sum(a,b)}</p>}
    </>
  );
}
