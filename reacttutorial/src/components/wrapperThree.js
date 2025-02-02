import ButtonComponent from "./Button";

export default function WrapperThree() {
  return (
    <span style={{ backgroundColor: "cyan", padding: "10px 20px" }}>
      <ButtonComponent
        text="read more"
        color="purple"
       
      ></ButtonComponent>
    </span>
  );
}

function WithPeter(Button) {
  /////////
  return <button></button>;
}
