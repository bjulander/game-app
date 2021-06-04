import { combineReducers } from "redux"
import ordersReducer from './ordersReducer'
import gameReducer from './gameReducer'

const rootReducer = combineReducers({
    gameReducer,
    ordersReducer
})

export default rootReducer; 