import { useSelector, useDispatch } from "react-redux";

const lightStatus = Object.freeze({
  lit: "lit",
  dark: "dark",
});

function Room(props) {
  const isOn = useSelector((state) => state.isOn);
  const dispatch = useDispatch();
  function flipSwitch() {
    dispatch({
      type: "flipSwitch",
    });
  }
  const lightedness = isOn ? lightStatus.lit : lightStatus.dark;
  return (
    <div className={`room ${lightedness}`}>
      The Room is {lightedness}
      <br />
      <button onClick={flipSwitch}>Flip</button>
    </div>
  );
}

export default Room;
