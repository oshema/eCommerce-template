
const initialState = {
    products: [],
}

const checkoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': return {
            ...state,
            products: [...state.products, action.payload],
        }
        case 'REMOVE_FROM_CART': return {
            ...state,
            products: state.products.filter(item => item.id !== action.id)
        }
        case 'INCREMENT_CART': return {
            ...state,
            products: state.products.map(item => item.id === action.id ? { ...item, amount: item.amount + 1 } : item),
        }
        case 'DECREMENT_CART': return {
            ...state,
            products: state.products.map(item => item.id === action.id ? { ...item, amount: item.amount != 1 ? item.amount - 1 : 1 } : item)
        }
        case 'EMPTY_CART': return {
            ...state,
            products: [],
        }
        default: return state
    }
}



export default checkoutReducer;