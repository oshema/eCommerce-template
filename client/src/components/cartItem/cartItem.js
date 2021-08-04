import React, { useEffect, useState } from 'react';
import './cartItem.css';
import { useDispatch } from 'react-redux';
import { incrementProduct, decrementProduct, removeFromCart } from '../../redux/actions/checkoutActions';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ButtonBase from '@material-ui/core/ButtonBase';

function CartItem({ id, title, price, img, amount }) {

    const [totalPrice, setTotalPrice] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        setTotalPrice(amount * price)
    }, [amount])

    const increaseAmount = () => {
        dispatch(incrementProduct(id))
    }

    const decreaseAmount = () => {
        dispatch(decrementProduct(id))
    }

    const removeItemFromCart = () => {
        dispatch(removeFromCart(id))
    }

    return (
        <div>
            <div className="cartItem">
                <div className="cartItem__infoWrapper">
                    <div className="--wide">{`$${totalPrice}`}</div>
                    <div className="cartItem__quantity cartItem__quantity--wide">
                        <ButtonBase onClick={increaseAmount}><AddBoxIcon /> </ButtonBase>
                        <div>{amount}</div>
                        <ButtonBase onClick={decreaseAmount} ><IndeterminateCheckBoxIcon /></ButtonBase>
                    </div>
                    <div className="--wide">{`$${price}`}</div>
                </div>
                <div >
                    <div className="cartItem__title">{title}</div>
                    <button className="cartItem__removeButton" onClick={removeItemFromCart}>remove</button>
                </div>
                <img className="cartItem__img" src={img} />
            </div>
            <hr />
        </div>
    )
}

export default CartItem;
