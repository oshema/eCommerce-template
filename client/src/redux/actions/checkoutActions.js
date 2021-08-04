
export const addToCart = (id) => {
    return {
        type: 'ADD_TO_CART',
        payload: {
            amount: 1,
            id
        }
    }
}

export const removeFromCart = (id) => {
    return {
        type: 'REMOVE_FROM_CART',
        id
    }
}

export const incrementProduct = (id) => {
    return {
        type: 'INCREMENT_CART',
        id
    }
}

export const decrementProduct = (id) => {
    return {
        type: 'DECREMENT_CART',
        id
    }
}

export const emptyCart = () => {
    return {
        type: 'EMPTY_CART',
    }
}