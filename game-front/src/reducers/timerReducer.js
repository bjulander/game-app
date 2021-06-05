export default function timerReducer(state = {timer: 5}, action) {
  switch (action.type) {
    case "SUB_TIME":
      return {timer: state.timer - 1}
    case "RESET_TIMER":
      return {timer: state.timer = 5}
    case "ADD_TIME":
      return {timer: action.payload}
    default:
      return state
  }
}
  