import ButtonComponent from "./components/Button";
import Shadow from "./components/composition/Shadow";

export default function App() {
  return (
    <>
      <Shadow>{() => <span>Rifat</span>}</Shadow>

      <Shadow>
        {(value) => (
          <ButtonComponent text="click me" color="red" something={value} />
        )}
      </Shadow>
    </>
  );
}
