import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer'
import './style/App.css';
// import IngredientsList from './IngredientsList.js'
// import * as FaIcons from "react-icons/fa" // <FaIcons.(iconName)/>

// import {createBrowserHistory} from 'history'

const initialState = {order: {}, game: { user: "", score: 0}, timer: 5, ingredients: []}
const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk), composeWithDevTools()))


ReactDOM.render(
  <Router >
    
    <Provider store={store}>
      <App/>
    </Provider>
  </Router>,
  document.getElementById('root')

)

