import "./Button.css";
function ButtonComponent({ text, color }) {
  return (
    <button style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
}

export default ButtonComponent;
