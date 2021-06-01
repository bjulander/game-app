export default function fetchOrders() {
    return (dispatch) => {
      fetch("http://localhost:3001/orders")
      .then(response => response.json())
      .then((ordersArray) => {
        dispatch({type: "FETCH_ORDERS", payload: ordersArray})
      })
    }
  }
  