export default function fetchOrder() {
    return (dispatch) => {
      fetch(`http://localhost:3001/orders/`)
      .then(response => response.json())
      .then((randOrder) => {
        dispatch({type: "FETCH_ORDER", payload: randOrder})
      })
    }
  }
  