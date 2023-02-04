import { CART_ACTION_TYPES } from "./cart_action_types"

export const setCart = () => {
    return {type:CART_ACTION_TYPES.SET_IS_CART_OPEN}
}