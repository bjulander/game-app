import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Instructions from './Instructions.js'

class Main extends Component {

    render(){
        return (
            <>
            <Switch>
                <Route exact path="/">
                    <Instructions/>
                    </Route>
                <Route exact path="/game">
                    NewGame
                    </Route>
                <Route exact path="/scoreboard">
                    Scoreboard
                    </Route>
            </Switch>
          </>
        )
    }
}


export default Main