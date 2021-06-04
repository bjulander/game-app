import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Instructions from './Instructions.js'
import {Link} from 'react-router-dom'
import GameContainer from '../game/GameContainer.js'


class Main extends Component {

    render(){
        return (
            <>
            <Switch>
                <Route exact path="/">
                    <Instructions/>
                    <Link to="/game">
                        <button type="button">New Game</button>
                    </Link>
                    </Route>
                <Route path="/game">
                    <GameContainer />
                    </Route>
                <Route exact path="/scoreboard">
                    Scoreboard Comp
                    </Route>
                <Route exact path="/about">
                    About Comp
                    </Route>
            </Switch>
          </>
        )
    }
}


export default Main