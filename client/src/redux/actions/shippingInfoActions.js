export const createOrderShippingInfo = (
    email,
    firstName,
    lastName,
    country,
    state = null,
    address,
    extraAddress = null,
    city,
    zip,
    phoneNum,
    totalOrderPrice
) => {
    return {
        type: 'CREATE_SHIPPING_INFO',
        payload: {
            email,
            firstName,
            lastName,
            country,
            state,
            address,
            extraAddress,
            city,
            zip,
            phoneNum,
            totalOrderPrice
        }
    }
}