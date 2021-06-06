export default function orderReducer(state = {order: {}}, action) {
  switch (action.type) {
    case "FETCH_ORDER":
      return {order: action.payload}
    default:
      return state
  }
}
  