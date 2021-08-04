const extractTotalOrderPrice = (allProductsData) => {
    let totalPricesSum = '';
    if (allProductsData) {
        let pricesSumList = allProductsData.map(item => {
            return item.amount * item.price
        })
        totalPricesSum = pricesSumList.reduce((a, b) => a + b, 0)
    }
    return totalPricesSum;
}

export default extractTotalOrderPrice;