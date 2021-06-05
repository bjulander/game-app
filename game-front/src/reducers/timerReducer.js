export default function timerReducer(state = {timer: 60}, action) {
  switch (action.type) {
    case "SUB_TIME":
      return {timer: state.timer - 1}
    case "RESET_TIMER":
      return {timer: state.timer = 60}
    case "ADD_TIME":
      return {timer: action.payload}
    default:
      return state
  }
}
  