import React from "react";
import "./style.css";

export default function App() {
  const [Text, SetText] = useState("");
  
  return (
    <>

    <p> {Text}</p>
      
    </>
  );
}
