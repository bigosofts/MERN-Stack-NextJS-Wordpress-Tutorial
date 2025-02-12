import Counter from "./components/renderProps/Counter";

import { ThemeProvider } from "./components/Context/ThemeProvider";
import ThemeToggleButton from "./components/Button";

export default function App() {
  return (
    <>
      <Counter
        render={(count, increment) => (
          <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increase</button>
          </div>
        )}
      />

      <ThemeProvider>
        <ThemeToggleButton />
      </ThemeProvider>

      {/* <Shadow>{() => <span>Rifat</span>}</Shadow>

      <Shadow>
        {(value) => (
          <ButtonComponent text="click me" color="red" something={value} />
        )}
      </Shadow> */}
    </>
  );
}
