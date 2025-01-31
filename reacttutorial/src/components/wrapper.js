import ButtonComponent from "./Button";

export default function Wrapper({ value, changeState }) {
  return (
    <span style={{ backgroundColor: "green", padding: "10px 20px" }}>
      <ButtonComponent
        text="read more"
        color="purple"
        addi={value}
        changeState={changeState}
      ></ButtonComponent>
    </span>
  );
}

function WithPeter(Button){/////////
    return <button></button>
}

