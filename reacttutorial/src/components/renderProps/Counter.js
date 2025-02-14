//render components

import React, {useState} from "react";

const Counter = ({render}) => {
  const[count, setCount] = useState(0);

  return render(count, ()=> setCount(count + 1) )

}

export default Counter;
