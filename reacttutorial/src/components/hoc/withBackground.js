import { useState } from "react";

const WithValueState = (WrappedComponent) => {
  return (props) => {
    const [value, setValue] = useState(">>");

    function changeText() {
      setValue("<<<Done>>>");
    }

    return (
      <WrappedComponent {...props} addi={value} changeState={changeText} />
    );
  };
};

export default WithValueState;
