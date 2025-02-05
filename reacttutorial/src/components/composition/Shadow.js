import {useState} from "react";

export default function Shadow({ children }) {
  const [value] = useState("Another");
  return (
    <span
      style={{
        boxShadow: "1px 2px 5px #3a3a3a",
        border: "1px solid #000",
        padding: "2px",
        borderRadius: "20px",
      }}
    >
      {children(value)}
    </span>
  );
}
