import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from "@stripe/react-stripe-js"
import StripeForm from '../stripeForm/stripeForm'

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHER_KEY)

function StripeContainer() {

    return (
        <Elements stripe={stripePromise}>
            <StripeForm />
        </Elements>
    )
}

export default StripeContainer
