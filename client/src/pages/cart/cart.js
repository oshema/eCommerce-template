import React, { useEffect, useState } from 'react';
import './cart.css';
import allProducts from '../../products.json';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import NavigationTool from '../../components/navigationTool/navigationTool';
import { emptyCart } from '../../redux/actions/checkoutActions';
import extractProdactsData from '../../utilities/extractProductsData';
import extractTotalOrderPrice from '../../utilities/extractTotalOrderPrice';
import TextField from '@material-ui/core/TextField';
import CartItem from '../../components/cartItem/cartItem';
import Paypal from '../../components/paypal/paypal';

function Cart() {

    const cartProducts = useSelector(state => state.checkout.products)
    const dispatch = useDispatch();

    const [cartItems, setCartItems] = useState('')
    const [totalOrderPrice, setTotalOrderPrice] = useState('')


    useEffect(() => {
        const cartData = extractProdactsData(allProducts, cartProducts);
        setCartItems(cartData)
    }, [cartProducts])

    useEffect(() => {
        const extractedOrderPrice = extractTotalOrderPrice(cartItems);
        setTotalOrderPrice(extractedOrderPrice)
    }, [cartItems])

    const emptyCartItems = () => {
        dispatch(emptyCart())
    }

    return (
        cartItems &&
        <div className="cart">
            <NavigationTool currentPage="cart" />
            {cartItems.length == 0 ?
                <>
                    <div className="cart__emptyCart">
                        Your cart is empty.
                    </div>
                    <Link className="cart__goBackButton" to="/home">
                        Go Back
                    </Link>

                </>
                :
                <>
                    <div className="cart__title">
                        YOUR CART
            </div>
                    <div className="cart__columns">
                        <div className="cart__columns__title">TOTAL</div>
                        <div className="cart__columns__title">AMOUNT</div>
                        <div className="cart__columns__title">PRICE</div>
                    </div>
                    <hr />
                    {cartItems.map(item =>
                        <CartItem
                            key={item.id}
                            id={item.id}
                            title={item.name}
                            price={item.price}
                            img={item.img}
                            amount={item.amount}
                        />)}
                    <div className="cart__bottom__wrapper">
                        <div>
                            <div className="cart__totalPrice">
                                {`TOTAL ORDER: $${totalOrderPrice}`}
                            </div>
                            <div className="cart__actions__wrapper">
                                <button onClick={emptyCartItems} className="cart__action ">empty cart</button>
                                <Link className="cart__action cart__action--link backToProductsButton" to='/products'>back to products</Link>
                                <Link className="cart__action cart__action--link cart__action--blackTheme" to='/checkout'>checkout</Link>
                            </div>
                            <Paypal totalOrderPrice={totalOrderPrice} />
                        </div>
                        <TextField
                            label="Add notes"
                            placeholder="Your note..."
                            multiline={true}
                            rows={3}
                            variant="outlined"
                        />
                    </div>
                </>
            }
        </div>
    )
}

export default Cart;
