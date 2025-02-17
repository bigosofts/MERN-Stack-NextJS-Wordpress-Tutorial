import React from "react";
import styles from "./square.module.css";

function Square({ changeState }) {
  console.log("Square rendered");
  return (
    <>
      <div className={styles.square}> Square </div>
      <button onClick={changeState}>Click Me from Square</button>
      <br></br>
    </>
  );
}

export default React.memo(Square);
