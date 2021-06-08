export default function choicesReducer(state = {choices: []}, action) {
    switch (action.type) {
      case "FETCH_CHOICES":
        return {choices: action.payload}
      default:
        return state
    }
}
    