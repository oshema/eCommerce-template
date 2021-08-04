const extractProdactsData = (productList, idQuaries) => {
    const cartProductsData = idQuaries.map(cartItem => { return ({ ...cartItem, ...productList.filter(product => cartItem.id == product.id)[0] }) })
    return cartProductsData
}

export default extractProdactsData;