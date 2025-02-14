import { useContext } from "react";
import { ThemeContext } from "../App";

export default function ButtonWrapper() {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Change Theme</button>;
}
