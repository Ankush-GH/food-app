import { ActionTypes } from "./action-types"

export const addToCart = (meal) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: meal,
    }
}

export const removeFromCart = (id) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: id,
    }
}