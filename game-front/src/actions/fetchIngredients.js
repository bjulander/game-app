export default function fetchIngredients() {
  return (dispatch) => {
    fetch("http://localhost:3001/ingredients/1")
    .then(response => response.json())
    .then((ingredients) => {
      dispatch({type: "FETCH_INGREDIENTS", payload: ingredients})
    })
  }
}
