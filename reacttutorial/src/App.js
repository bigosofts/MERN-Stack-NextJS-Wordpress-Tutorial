//functional COmponent

import ButtonComponent from "./components/Button";
import React, { useEffect, useState } from "react";
// import { useState } from "react";

// export default function App() {
//   let [text, setText] = useState("This is initial Rifat Text"); // ["This is initial Text", ()=> {}]

//   return (
//     <>
//       <h1> {text} </h1>
//       <button onClick={() => setText("This is limon")}>Click me</button>
//     </>
//   );
// }

// export default class App extends React.Component {
//   state = {
//     text: "This is Rifat Text 1",
//   };

//   onHandle() {
//     this.setState({
//       text: "This is Yahia Text",
//     });
//   }

//   render() {
//     return (
//       <>
//         <h1> {this.state.text}</h1>
//         <button onClick={()=> this.onHandle()}>Click Me</button>
//       </>
//     );
//   }
// }

// export default function App() {
//   const [text, setText] = useState("");
//   const [text2, setText2] = useState("This is text 2");

//   return (
//     <>
//       <h1>{text}</h1>
//       <h1>{text2}</h1>
//       <button
//         onClick={() => {
//           setText2("This is Text 3");
//           setText("");
//         }}
//       >
//         Press Me
//       </button>
//       <ButtonComponent text="click me" color="red" />
//     </>
//   );
// }

export default class App extends React.Component {
  state = {
    text: "",
    text2: "This is text 2",
  };

  componentDidMount() {
    let delay = () => {
      setTimeout(() => {
        this.setState({
          text: "Data Found",
        });
      }, 5000);
    };

    delay();
  }

  render() {
    return (
      <>
        <h1>{this.state.text}</h1>
        <h1>{this.state.text2}</h1>
        <button
          onClick={() => {
            this.setState({
              text2: "This is Text 3",
              text: "",
            });
          }}
        >
          Press Me
        </button>
        <ButtonComponent text="click me" color="red" />
      </>
    );
  }
}
