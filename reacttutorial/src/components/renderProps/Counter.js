//render components

import React, { useState } from "react";

// A component that provides a count and an updater function via render props
const Counter = ({ render }) => {
  const [count, setCount] = useState(0);

  return render(count, () => setCount(count + 1));
};



export default Counter;
