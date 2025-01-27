import ButtonComponent from "./components/Button";

//functional COmponent

function App() {
  return (
    <>
      <ButtonComponent text="Click Me" color="Red" />
      <ButtonComponent text="Read More" color="green" />
      <ButtonComponent text="Go Back" color="purple" />
    </>
  );
}

//class component

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <div>Yahia</div>
//       </div>
//     );
//   }
// }

export default App;

// let a = {
//   type: "div",
//   props: {
//     children: {
//       type: "div",
//       props: { children: "Rifat" },
//     },
//   },
// };

// let a = {
//   type: "div",
//   props: {
//     children: {
//       type: "div",
//       props: { children: "Yahia" },
//     },
//   },
// };
