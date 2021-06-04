import React, {Component} from 'react'
import {connect} from 'react-redux'


class RightBar extends Component {

    render(){
        return (
            <>
                <h4>Timer Comp (rightBar top)</h4>
                <h4>Points Comp (rightBar midtop)</h4>
                <h4>Sandwich Builder Comp (rightBar cent)</h4>
                <h3>{this.props.game.user}</h3>
            </>
        )
    }
}

function mapStateToProps(state){
    let newGame = state.gameReducer.game
    return {game: newGame}
}

export default connect(mapStateToProps)(RightBar)