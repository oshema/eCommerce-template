import React, { useState, useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Paypal({ totalOrderPrice }) {


    return (
        <>
            <hr />
            <PayPalScriptProvider options={{ "client-id": "AW9QmfWpchI1m7Kb9RZ1_4ytB85-q4meBZdGlUeNRrJ6HyMpDg-ENKHfJWxE-Li4PLdRVPRAsY5Yy1Aa" }}>
                <PayPalButtons
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: totalOrderPrice,
                                    },
                                },
                            ],
                        });
                    }}
                />
            </PayPalScriptProvider>
        </>
    )
}

export default Paypal
