export default function ordersReducer(state = {orders: []}, action) {
  debugger
    switch (action.type) {
      case "FETCH_ORDERS":
        return {orders: action.payload}
      default:
        return state
  }
}
  