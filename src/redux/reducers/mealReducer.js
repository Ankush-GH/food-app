import { ActionTypes } from "../actions/action-types";

const initialState = {
    meals: [
        {
            id: 1,
            MealName: "Soya"
        }
    ]
}

export const mealReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:

            return state
        default:
            return state
    }
    return state
}