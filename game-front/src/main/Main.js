import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Instructions from './Instructions.js'
import {Link} from 'react-router-dom'
import LeftBar from '../bars/leftBar/LeftBar.js'
import GameContainer from '../game/GameContainer.js'
import RightBar from '../bars/rightBar/RightBar.js'

class Main extends Component {

    render(){
        return (
            <>
            <Switch>
                <Route exact path="/">
                    <Instructions/>
                    <Link to="/game">
                        <button type="button">Order Up</button>
                    </Link>
                    </Route>
                <Route exact path="/game">
                    <GameContainer />
                    <LeftBar />
                    <RightBar />
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