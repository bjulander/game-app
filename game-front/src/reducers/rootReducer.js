import { combineReducers } from "redux"
import orderReducer from './orderReducer'
import gameReducer from './gameReducer'
import timerReducer from './timerReducer'
import ingredientsReducer from './ingredientsReducer'

const rootReducer = combineReducers(
    {
        gameReducer,
        orderReducer,
        timerReducer,
        ingredientsReducer
    }
)

export default rootReducer; 