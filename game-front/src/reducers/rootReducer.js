import { combineReducers } from "redux"
import ordersReducer from './ordersReducer'
import gameReducer from './gameReducer'
import timerReducer from './timerReducer'

const rootReducer = combineReducers(
    {
        gameReducer,
        ordersReducer,
        timerReducer
    }
)

export default rootReducer; 