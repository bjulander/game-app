export default function ordersReducer(state = {orders: []}, action) {
    switch (action.type) {
      case "FETCH_ORDERS":
        return {orders: action.payload}
      default:
        return state
  }
}
  