import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

// import {createBrowserHistory} from 'history'
// import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
// import listsReducer from './reducers/listsReducer'
// import {composeWithDevTools} from 'redux-devtools-extension'
// import thunk from 'redux-thunk'

// const store = createStore(listsReducer, initialState, compose(applyMiddleware(thunk), composeWithDevTools()))

ReactDOM.render(
  <Router >
    <Provider >
      <App/>
    </Provider>
  </Router>,
  document.getElementById('root')
)

