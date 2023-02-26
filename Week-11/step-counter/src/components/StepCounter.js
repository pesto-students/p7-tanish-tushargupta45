import { connect } from "react-redux";
import { actions } from "../redux/reducer";

function StepCounter(props) {
  const { dispatch } = props;
  return (
    <div>
      <p className="DisplayText">
        <b>You've walked {props.count} steps today!</b>
      </p>
      <button
        className="Add"
        onClick={() => {
          dispatch({
            type: actions.INCREMENT,
          });
        }}
      >
        Add a Step
      </button>
      <button
        onClick={() => {
          dispatch({
            type: actions.RESET,
          });
        }}
      >
        Reset Steps
      </button>
    </div>
  );
}
const mapStateToProps = (state) => ({ count: state.count });
const ConnectedStepCounter = connect(mapStateToProps)(StepCounter);

export default ConnectedStepCounter;
