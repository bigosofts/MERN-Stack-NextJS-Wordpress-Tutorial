import { useState } from "react";
export default function ConditionalRender() {
  const [count, setCount] = useState(true);

  return (
    <>
      {count ? <h1>true</h1> : <p>false</p>}

      <button onClick={() => setCount((prev) => !prev)}>CLick me</button>
    </>
  );
}
