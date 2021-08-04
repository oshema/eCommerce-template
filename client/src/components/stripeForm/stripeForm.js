import React, { useState } from 'react';
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import './stripeForm.css';

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "black",
            fontWeight: 500,
            fontFamily: "Roboto",
            fontSize: "16px",
            fontSmoothing: "antiAliased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "#87bbfd" },
        },
        invalid: {
            iconColor: "#rgb(238, 71, 71)",
            color: "#rgb(238, 71, 71)"
        }
    },
    hidePostalCode: true
}

function StripeForm() {

    const shippingDetails = useSelector(state => state.shippingInfo.shippingInfo)

    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const hundleSubmit = async (e) => {
        e.preventDefault()

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
        if (!error) {
            try {
                const { id } = paymentMethod
                const { totalOrderPrice } = shippingDetails
                const response = await axios.post("http://localhost:4000/payment", {
                    amount: totalOrderPrice * 100,
                    id,
                    shippingDetails
                })
                if (response.data.success) {
                    console.log("Successful Payment")
                    setSuccess(true)
                }

            }
            catch (error) {
                console.log("error", error)
            }
        }
        else {
            console.log(error.message)
        }
    }


    return (
        <>
            {!success ?
                <>
                    <div className="cardForm__Title">
                        To complete your purchase, please enter your credit card details.
                    </div>
                    <form onSubmit={hundleSubmit}>
                        <fieldset className="cardForm">
                            <div >
                                <CardElement options={CARD_OPTIONS} />
                            </div>
                        </fieldset>
                        <button className="cardForm__button">pay</button>
                    </form>
                </>
                :
                <>
                    <div className="cardForm__Title">
                        THANK YOU FOR YOUR PURCHASE.
                    </div>
                    <Link className="cardForm__button cardForm__button--home" to="/">return to homepage</Link>
                </>
            }

        </>

    )
}

export default StripeForm
