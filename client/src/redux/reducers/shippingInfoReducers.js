const initialState = {
    shippingInfo: {
        email: "",
        firstName: "",
        lastName: "",
        country: "",
        state: "",
        address: "",
        extraAddress: "",
        city: "",
        zip: "",
        phoneNum: "",
        totalOrderPrice: 0
    }
}

const shippingInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_SHIPPING_INFO': return {
            ...state,
            shippingInfo: { ...action.payload },
        }
        default: return state
    }
}



export default shippingInfoReducer;