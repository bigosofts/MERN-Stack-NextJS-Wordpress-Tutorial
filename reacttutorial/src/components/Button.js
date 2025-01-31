import "./Button.css";
import React from "react";
// function ButtonComponent({ text, color }) {
//   return (
//     <button style={{ backgroundColor: color }} className="btn">
//       {text}
//     </button>
//   );
// }
import { useState } from "react";
function ButtonComponent({ text, color, addi, changeState }) {
  //[value, setvalue]

  return (
    <button onClick={changeState} style={{ backgroundColor: color }} className="btn">
      {text} {addi}
    </button>
  );
}

export default ButtonComponent;
