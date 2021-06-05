import React, {Component} from 'react'
import LeftBar from '../bars/leftBar/LeftBar.js'
import RightBar from '../bars/rightBar/RightBar.js'
import {withRouter} from 'react-router-dom'
import fetchOrders from '../actions/fetchOrders'
import {connect} from 'react-redux'
import newGame from '../actions/newGame'
import '../style/BarsStyle.css'
import startTimer from '../actions/startTimer'
import stopTimer from '../actions/stopTimer'

class GameContainer extends Component {

    constructor() {
        super()
        this.state = {newForm: true}
    }

    componentDidMount() {
        this.props.fetchOrders()
    }


    handleSubmit(e){
        e.preventDefault()
        this.setState({newForm: false})
        const name = e.target[0].value
        this.props.newGame(name)
        this.props.startTimer()
        this.props.stopTimer()
    }

    handleClick(){
        
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
                <h4>Current Order Comp (center top)</h4>
                <h4>GameOrderForm Comp (center)</h4>
                <span className="LeftBarStyle">
                    <LeftBar />
                </span>
                <span className="RightBarStyle" >
                    <RightBar timed={this.props.startTimer()}/>
                </span>
            </>
        )
    }
}


export default withRouter(connect(null, {fetchOrders, newGame, startTimer, stopTimer})(GameContainer))