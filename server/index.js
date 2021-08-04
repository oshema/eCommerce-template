const express = require("express");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())


app.post("/payment", cors(), async (req, res) => {
    let { amount, id, shippingDetails } = req.body
    try {
        const {
            email,
            firstName,
            lastName,
            country,
            state,
            address,
            extraAddress,
            city,
            zip,
            phoneNum
        } = shippingDetails
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            payment_method: id,
            receipt_email: email,
            shipping: {
                address: {
                    city,
                    country,
                    state,
                    line1: address,
                    line2: extraAddress,
                    postal_code: zip,
                },
                name: `${firstName} ${lastName}`,
                phone: phoneNum
            },

            confirm: true
        })
        console.log("payment: ", payment)
        res.json({
            message: "Payment Successful",
            success: true
        })

    } catch (error) {
        console.log("Error: ", error)
        res.json({
            message: "Payment failed",
            success: false
        })

    }
})

app.listen(process.env.PORT || 4000, () => {
    console.log("Server is listening on port 4000")
})

