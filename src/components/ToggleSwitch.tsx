
type ToggleSwitchProp = {
  toggleState: boolean;
  setToggle: (type: boolean) => void;
}

function ToggleSwitch({ toggleState, setToggle }: ToggleSwitchProp) {
  function click() {
    setToggle(!toggleState)
  }

  return (
    <div>
      <div onClick={click}
        className={toggleState ? "toggle on" : "toggle"}>
        <div></div>
      </div>
      <br />
      <h5>{toggleState ? "Yearly" : "Monthly"}</h5>
    </div>
  )
}

export default ToggleSwitch