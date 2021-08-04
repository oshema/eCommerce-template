import React from 'react';
import './checkoutItemPreview.css';

function CheckoutItemPreview({ img, name, amount, price }) {
    return (
        <div className="checkoutItem">
            <div className="checkoutItem__leftWrapper">
                <img className="checkoutItem__img" src={img} />
                <div className="checkoutItem__quantity">{`x${amount}`}</div>
                <div className="checkoutItem__name">{name}</div>
            </div>

            <div>{`$${amount * price}`}</div>
        </div>
    )
}

export default CheckoutItemPreview
