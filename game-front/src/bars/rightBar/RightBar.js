import React, {Component} from 'react'
import {connect} from 'react-redux'



class RightBar extends Component {

    render(){
        return (
            <>
                <article className="RightBarStyle">
                    <h4>Timer Comp (rightBar top)</h4>
                    <h4>Points Comp (rightBar midtop)</h4>
                    <h4>Sandwich Builder Comp (rightBar cent)</h4>
                </article>
            </>
        )
    }
}

function mapStateToProps(state){
    let newGame = state.gameReducer.game
    return {game: newGame}
}

export default connect(mapStateToProps)(RightBar)