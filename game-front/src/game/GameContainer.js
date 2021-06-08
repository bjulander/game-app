import React, {Component} from 'react'
import LeftBar from '../bars/leftBar/LeftBar.js'
import RightBar from '../bars/rightBar/RightBar.js'
import {withRouter} from 'react-router-dom'
import fetchOrder from '../actions/fetchOrder'
import fetchIngredients from '../actions/fetchIngredients'
import {connect} from 'react-redux'
import newGame from '../actions/newGame'
import '../style/BarsStyle.css'
import startTimer from '../actions/startTimer'
import stopTimer from '../actions/stopTimer'
import Ingredients from '../ingredients/Ingredients'
import '../style/IngredientsStyle.css'

class GameContainer extends Component {

    componentDidMount(){
        this.props.fetchIngredients()
    }

    constructor() {
        super()
        this.state = {newForm: true}
    }

    handleSubmit(e){
        e.preventDefault()
        this.setState({newForm: false})
        const name = e.target[0].value
        this.props.newGame(name)
        this.props.startTimer()
        this.props.stopTimer()
        this.props.fetchOrder()
    }

    render(){

        return(
            <>
                <p>(Introduce layout)</p>
                {this.state.newForm ?
                    <div className="FormStyle">
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <input type="text" size="5"/>                            
                            <input type="submit" value="Start" />
                        </form>
                    </div>
                : null}
                <span className="LeftBarStyle">
                    <LeftBar />
                </span>
                <span className="IngredientsStyle">
                    <Ingredients />
                </span>
                <span className="RightBarStyle" >
                    <RightBar/>
                </span>
            </>
        )
    }
}


export default withRouter(connect(null, {fetchOrder, newGame, startTimer, stopTimer, fetchIngredients})(GameContainer))