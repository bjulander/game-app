export default function ordersReducer(state = {orders: {orders: []}}, action) {
    switch (action.type) {
      case "FETCH_ORDERS":
        return {orders: action.payload}
      case "NEW_GAME":
        return {game: action.payload}
      default:
        return state
  }
}
  