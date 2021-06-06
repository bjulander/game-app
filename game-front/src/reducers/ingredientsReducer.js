export default function ingredientsReducer(state = {ingredients: []}, action) {
    switch (action.type) {
      case "FETCH_INGREDIENTS":
        return {ingredients: action.payload}
      default:
        return state
    }
  }
    