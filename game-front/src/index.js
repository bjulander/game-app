import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import ordersReducer from './reducers/ordersReducer'
import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

// import {createBrowserHistory} from 'history'
// import {createStore, combineReducers, compose, applyMiddleware} from 'redux'

const initialState = {orders: [{id: 1, name: "Italian", bread: "Squaw", cheese: "Pepper Jack", meats: "Salami, Pepperoni, Ham", basics: "Lettuce, Tomato, Onion, Pickles", extras: "Olives, Sprouts, Bell Pepper", condiments: "Mayo, Mustard"}, {id: 2, name: "Turkey", bread: "Wheat", cheese: "Provolone", meats: "Turkey", basics: "Lettuce, Tomato, Pickles", extras: "Sprouts", condiments: "Mayo"}, {id: 3, name: "Club", bread: "White", cheese: "American", meats: "Ham, Turkey", basics: "Lettuce, Tomato", extras: "Olives", condiments: "Mayo, Mustard"} ]}
const store = createStore(ordersReducer, initialState, compose(applyMiddleware(thunk), composeWithDevTools()))


ReactDOM.render(
  <Router >
    <Provider store={store}>
      <App/>
    </Provider>
  </Router>,
  document.getElementById('root')
)

