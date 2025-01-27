import "./Button.css";
import React from "react";
// function ButtonComponent({ text, color }) {
//   return (
//     <button style={{ backgroundColor: color }} className="btn">
//       {text}
//     </button>
//   );
// }

class ButtonComponent extends React.Component {
  render() {
    return (
      <button style={{ backgroundColor: this.props.color }} className="btn">
        {this.props.text}
      </button>
    );
  }
}

export default ButtonComponent;
