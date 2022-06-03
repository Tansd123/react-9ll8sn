import React, { useInsertionEffect, useState } from "react";
import "./style.css";

export default function App() {
  const [Text, SetText] = useState("");
  const [show, setshow] = useState(false);
  return (
    <>
    <input onChange={e => SetText(e.target.value)}/>
    
    <button type= "button" onClick={() => setshow(!show)}>
     {show === true ? "Hide" : "Show" }
    </button>
    {show && <p> {Text}</p>}
      
    </>
  );
}