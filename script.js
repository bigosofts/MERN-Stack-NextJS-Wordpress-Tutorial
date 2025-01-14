// var number = 0;
// var number2 = 0;
// function increment() {
//   number++;
//   var element = document.querySelector("#counter");
//   element.innerHTML = number;
// }

// function increment2() {
//   number2++;
//   var element = document.querySelector("#counter2");
//   element.innerHTML = number2;
// }

var rootElement = document.querySelector("#root");

function Button() {
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <h1>
        <span>{counter}</span> {/* Display the counter value */}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>Add+</button>{" "}
      {/* Update counter on click */}
    </div>
  );
}

function Main() {
  return (
    <div>
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
    </div>
  );
}

ReactDOM.render(<Main />, rootElement);
