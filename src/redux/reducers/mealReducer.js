import { ActionTypes } from "../actions/action-types";

const initialState = {
    meals: []
}

export const mealReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            return {
                ...state,
                meals: [...state.meals, payload]
            }
        case ActionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                meals: state.meals.filter(meal => meal.id !== payload)
            }
        default:
            return state
    }
}
