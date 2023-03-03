import { combineReducers } from "redux";
import { mealReducer } from "./mealReducer";

const reducers = combineReducers({
    cartMeals: mealReducer,
})

export default reducers;