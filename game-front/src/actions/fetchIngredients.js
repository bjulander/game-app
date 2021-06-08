export default function fetchIngredients() {
  return (dispatch) => {
    fetch("http://localhost:3001/ingredients")
    .then(response => response.json())
    .then((ingArray) => {
      dispatch({type: "FETCH_INGREDIENTS", payload: ingArray})
    })
  }
}
