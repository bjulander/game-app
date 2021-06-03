import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import LeftBar from '../bars/leftBar/LeftBar.js'
import RightBar from '../bars/rightBar/RightBar.js'
import {withRouter} from 'react-router-dom'
import fetchOrders from '../actions/fetchOrders'
import {connect} from 'react-redux'



class GameContainer extends Component {

    constructor() {
        super()
        this.state = {user: ""}
    }

    componentDidMount() {
        this.props.fetchOrders()
    }


    handleSubmit(e){
        e.preventDefault()
        debugger
        console.log(this)
        this.props.history.push('/game')
    }

    render(){
        return(
            <>
            <Switch>
                <Route path="/game">
                    <Route exact path="/game/new">
                        <p>(Introduce layout)</p>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <input type="text" size="5"/>
                            <input type="submit" value="Order Up" />
                        </form>
                    </Route>
                        <h4>Current Order Comp (center top)</h4>
                        <h4>GameOrderForm Comp (center)</h4>
                    <LeftBar />
                    <RightBar />
                </Route>
                </Switch>
            </>
        )
    }
}


export default withRouter(connect(null, {fetchOrders})(GameContainer))