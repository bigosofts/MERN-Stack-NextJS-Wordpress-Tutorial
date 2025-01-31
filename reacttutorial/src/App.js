import ButtonComponent from "./components/Button";
import Wrapper from "./components/wrapper";
// Previous class
import { useState } from "react";
import Output from "./components/enhanced";
/// props receive function/class
// State define function/class
// lifecycle methid function/class

export default function App() {
  const [value, setValue] = useState(">>");

  function changeText() {
    setValue("<<<Done>>>");
  }

  return (
    <>
      <h1>Rifat</h1>
      <ButtonComponent
        text="click me"
        color="red"
        addi={value}
        changeState={changeText}
      ></ButtonComponent>

      <Wrapper value={value} changeState={changeText} />

      <Output />
    </>
  );
}
