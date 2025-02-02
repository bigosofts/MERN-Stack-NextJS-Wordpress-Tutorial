import "./Button.css";
import withValueState from "./hoc/withBackground";

function ButtonComponent({ text, color, addi, changeState }) {
  return (
    <button
      onClick={changeState}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text} {addi}
    </button>
  );
}

let updatedComponent = withValueState(ButtonComponent);

export default updatedComponent;
