import { combineReducers } from "redux"
import ordersReducer from './ordersReducer'
import gameReducer from './gameReducer'

const rootReducer = combineReducers({
    games: gameReducer,
    orders: ordersReducer
})

export default rootReducer; 