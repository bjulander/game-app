import React, {Component} from 'react'
import LeftBar from '../bars/leftBar/LeftBar.js'
import RightBar from '../bars/rightBar/RightBar.js'
import {withRouter} from 'react-router-dom'
import fetchOrder from '../actions/fetchOrder'
import {connect} from 'react-redux'
import newGame from '../actions/newGame'
import '../style/BarsStyle.css'
import startTimer from '../actions/startTimer'
import stopTimer from '../actions/stopTimer'
import SandwichForm from './SandwichForm.js'
import Ingredients from '../ingredients/Ingredients'

class GameContainer extends Component {

    constructor() {
        super()
        this.state = {newForm: true}
    }

    componentDidMount() {
        this.props.fetchOrder()
    }


    handleSubmit(e){
        e.preventDefault()
        this.setState({newForm: false})
        const name = e.target[0].value
        this.props.newGame(name)
        this.props.startTimer()
        this.props.stopTimer()
    }

    render(){

        return(
            <>
                <p>(Introduce layout)</p>
                {this.state.newForm ?
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <input type="text" size="5"/>                            
                        <input type="submit" value="Start" />
                    </form>
                : null}
                <span>
                    <SandwichForm/>
                    <Ingredients/>
                </span>
                <span className="LeftBarStyle">
                    <LeftBar />
                </span>
                <span className="RightBarStyle" >
                    <RightBar/>
                </span>
            </>
        )
    }
}


export default withRouter(connect(null, {fetchOrder, newGame, startTimer, stopTimer})(GameContainer))