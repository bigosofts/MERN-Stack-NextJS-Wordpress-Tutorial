import Counter from "./components/renderProps/Counter";
import ConditionalRender from "./components/conditinalRender/ConditionalRender";
import ThemeToggoleButton from "./components/Button";

import { createContext, useState } from "react";
import { useRef } from "react";

export const ThemeContext = createContext();

export default function App() {
  // const [theme, setTheme] = useState("light");
  // function toggleTheme() {
  //   setTheme(theme == "light" ? "dark" : "light");
  // }

  const [data, setData] = useState({
    name: "Abdullah",
    age: 30,
    email: "abdullah.limonbau@gmail.com",
    occupation: "job",
  });

  // const name = useRef();
  // const age = useRef();
  // const email = useRef();
  // const occupation = useRef();

  function submitHander(e) {
    e.preventDefault();
   

    console.log(data);
  }
  return (
    <>
      {/* <ConditionalRender />

      <Counter
        render={(count, increment) => {
          return (
            <div>
              <p> Count: {count}</p>
              <button onClick={increment}>Click me</button>
            </div>
          );
        }}
      ></Counter>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeToggoleButton />
      </ThemeContext.Provider> */}

      <form onSubmit={submitHander}>
        Name:{" "}
        <input
          onChange={(e) => {
            e.preventDefault();
            setData((prev) => ({ ...prev, name: e.target.value }));
          }}
          value={data.name}
          type="text"
        />
        <br></br>
        Age:{" "}
        <input
          onChange={(e) => {
            e.preventDefault();
            setData((prev) => ({ ...prev, age: e.target.value }));
          }}
          value={data.age}
         
          type="number"
        ></input>
        <br></br>
        Email:{" "}
        <input
          onChange={(e) => {
            e.preventDefault();
            setData((prev) => ({ ...prev, email: e.target.value }));
          }}
          value={data.email}
          
          type="email"
        ></input>
        <br></br>
        Occupation:
        <select
          onChange={(e) => {
            e.preventDefault();
            setData((prev) => ({ ...prev, occupation: e.target.value }));
          }}
          value={data.job}
          
          name="fruits"
        >
          <option value="apple">Job</option>
          <option value="banana">Business</option>
          <option value="cherry">Freelancing</option>
        </select>
        <br></br>
        <input type="submit" value="Submit" />
      </form>

      {/* <button onClick={submitHander}>Submit</button> */}

      {/* <form>
        <input
          onChange={(e) => {
            console.log(e.target.value);
          }}
          type="text"
        ></input>
        <br></br>
        <input
          onChange={(e) => {
            console.log(e.target.value);
          }}
          type="number"
        ></input>
        <br></br>
        <input
          onChange={(e) => {
            console.log(e.target.value);
          }}
          type="email"
        ></input>
        <br></br>
        <input
          onChange={(e) => {
            console.log(e.target.value);
          }}
          type="range"
          min="10"
          max="100"
        />
        <br></br>
        <input
          onChange={(e) => {
            console.log(e.target.files);
          }}
          type="file"
          min="10"
          max="100"
        />
        <br></br>
        <input
          onChange={(e) => {
            console.log(e.target.value);
          }}
          type="checkbox"
          min="10"
          max="100"
          value="male"
        />{" "}
        male
        <br></br>
        <input type="checkbox" min="10" max="100" value="female" /> female
        <br></br>
        <input
          onChange={(e) => {
            console.log(e.target.value);
          }}
          type="date"
        />
        <br></br>
        <input type="time" />
        <br></br>
        <input type="datetime-local" />
        <br></br>
        <input type="datetime-local" />
        <br></br>
        <input type="radio" name="gender" />
        <br></br>
        <input type="radio" name="gender" />
        <br></br>
        <input type="button" value="Click me" />
        <br></br>
        <input
          onChange={(e) => {
            console.log(e.target.value);
          }}
          type="password"
        />
        <br></br>
        <select
          onChange={(e) => {
            console.log(e.target.value);
          }}
          name="fruits"
        >
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="cherry">Cherry</option>
        </select>
      </form> */}
    </>
  );
}
