import React, {Component} from 'react'
import {connect} from 'react-redux'
import SandwichForm from './SandwichForm.js'



class RightBar extends Component {
    
    render(){
        return (
            <>
                <h3>Completed Orders Comp</h3>
                <SandwichForm/>
            </>
        )
    }
}

function mapStateToProps(state){
    let newGame = state.gameReducer.game
    return {game: newGame}
}

export default connect(mapStateToProps)(RightBar)