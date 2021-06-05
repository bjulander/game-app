export default function startTimer() {
    return (dispatch) => {
        let i = 0
        const loop = setInterval(() => {
            if ( i === 5){
                clearInterval(loop)
                dispatch({type: "RESET_TIMER"})}
            else{
                dispatch({type: "SUB_TIME"})
            }i++
        }, 1000)
    }
}