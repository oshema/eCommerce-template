import React, { useState } from 'react';
import axios from "axios";
import { useSelector } from "react-redux";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

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
                <form onSubmit={hundleSubmit}>
                    <fieldset>
                        <div>
                            <CardElement options={CARD_OPTIONS} />
                        </div>
                    </fieldset>
                    <button>Pay</button>
                </form>
                :
                <div>
                    return finish
        </div>
            }

        </>

    )
}

export default StripeForm
