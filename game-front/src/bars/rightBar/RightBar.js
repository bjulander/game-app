import React, {Component} from 'react'
import {connect} from 'react-redux'
import Timer from './Timer.js'



class RightBar extends Component {
    

    render(){
        debugger
        return (
            <>
                <Timer/>
                <h4>Points Comp (rightBar midtop)</h4>
                <h4>Sandwich Builder Comp (rightBar cent)</h4>
            </>
        )
    }
}

function mapStateToProps(state){
    let newGame = state.gameReducer.game
    return {game: newGame}
}

export default connect(mapStateToProps)(RightBar)