import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import LeftBar from '../bars/leftBar/LeftBar.js'
import RightBar from '../bars/rightBar/RightBar.js'
import {withRouter} from 'react-router-dom'



class GameContainer extends Component {

    constructor() {
        super()
        this.state = {user: ""}
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
                        <p>(Introduce surroundings)</p>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <input type="text" size="5"/>
                            <input type="submit" value="Order Up" />
                        </form>
                    </Route>
                        <h4>Current Order Comp (center top)</h4>
                        <h4>Ingredients List Comp (center)</h4>
                    <LeftBar />
                    <RightBar />
                </Route>
                </Switch>
            </>
        )
    }
}

export default withRouter(GameContainer)