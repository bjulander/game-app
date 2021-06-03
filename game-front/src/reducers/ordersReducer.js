export default function ordersReducer(state = {orders: []}, action) {
    switch (action.type) {
      case "FETCH_LISTS":
        return {lists: action.payload}
      default:
        return state
  }
}
  