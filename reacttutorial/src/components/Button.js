import "./Button.css";

function ButtonComponent({ text, color, children, something }) {
  return (
    <button style={{ backgroundColor: color }} className="btn">
      {text} {something}
    </button>
  );
}

export default ButtonComponent;
