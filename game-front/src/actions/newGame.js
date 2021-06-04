export default function newGame(name) {
    return (dispatch) => {
        let game = {
            game: {
                user: name,
                score: 0
            }
        }
        let options = {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"},
            body: JSON.stringify(game)
        }
      fetch("http://localhost:3001/games", options)
      .then(r =>  r.json())
      .then(gm => dispatch({type: "NEW_GAME", payload: gm}))
    }
  }