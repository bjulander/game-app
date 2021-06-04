export default function gameReducer(state = {game: { user: "", score: 0}}, action) {
    console.log("hi")
    switch (action.type) {
      case "NEW_GAME":
        return {game: action.payload}
      default:
        return state
  }
}
  