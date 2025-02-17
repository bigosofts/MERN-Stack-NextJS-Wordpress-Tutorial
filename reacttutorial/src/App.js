// import Square from "./components/square";
// import { useState } from "react";
// import { useCallback } from "react";

// export default function App() {
//   const [data, setData] = useState("Rifat");
//   const changeState = useCallback(() => {
//     setData("Yahia");
//   }, []); //reference type

//   console.log("App rendered");
//   return (
//     <>
//       <div className="square">{data}</div>
//       <Square changeState={changeState} />
//       <button onClick={changeState}>Click Me From App</button>
//     </>
//   );
// }

import React, { Suspense, lazy } from "react";

// Lazy load the component
const LazyComponent = lazy(() => import("./components/lazyComponent"));

function App() {
  return (
    <div>
      <h1>React Lazy & Suspense Example</h1>

      {/* Suspense with fallback UI while loading */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;


