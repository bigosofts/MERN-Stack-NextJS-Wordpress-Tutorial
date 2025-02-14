import { useContext } from "react";
import { ThemeContext } from "../App";
import ButtonWrapper from "./bittonWrapper";

const ThemeToggoleButton = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        background: theme == "light" ? "#fff" : "#333",
        color: theme == "light" ? "#333" : "#fff",
        padding: "20px",
      }}
    >
      <h1>Current Theme: {theme}</h1>
      <ButtonWrapper />
    </div>
  );
};

export default ThemeToggoleButton;
