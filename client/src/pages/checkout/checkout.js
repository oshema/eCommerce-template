import React, { useState, useEffect } from 'react';
import './checkout.css';
import allProducts from '../../products.json';
import { useDispatch, useSelector } from 'react-redux';
import extractProdactsData from '../../utilities/extractProductsData';
import extractTotalOrderPrice from '../../utilities/extractTotalOrderPrice';
import CheckoutItemPreview from '../../components/checkoutItemPreview/checkoutItemPreview';
import { createOrderShippingInfo } from '../../redux/actions/shippingInfoActions';
import { Link } from 'react-router-dom'
import NavigationTool from '../../components/navigationTool/navigationTool';
import TextField from '@material-ui/core/TextField';
import { validate } from "react-email-validator";
import StripeContainer from '../../components/stripeContainer/stripeContainer';

function Checkout() {

    const checkoutProducts = useSelector(state => state.checkout.products)
    const dispatch = useDispatch()

    const [checkoutItems, setCheckoutItems] = useState('')
    const [totalOrderPrice, setTotalOrderPrice] = useState('')
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState('')
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
    const [address, setAddress] = useState('')
    const [extraAddress, setExtraAddress] = useState('')
    const [city, setCity] = useState('')
    const [zip, setZip] = useState('')
    const [phoneNum, setPhoneNum] = useState('')
    const [error, setError] = useState({
        email: false,
        firstName: false,
        lastName: false,
        country: false,
        address: false,
        city: false,
        zip: false,
        phoneNum: false,
        errorMsg: ""
    })
    const [proceed, setProceed] = useState(false)


    useEffect(() => {
        const checkoutData = extractProdactsData(allProducts, checkoutProducts);
        setCheckoutItems(checkoutData)
    }, [checkoutProducts])

    useEffect(() => {
        const extractedOrderPrice = extractTotalOrderPrice(checkoutItems);
        setTotalOrderPrice(extractedOrderPrice)
    }, [checkoutItems])

    const handlePhoneNumber = (e) => {
        let num = e.target.value;
        if (num) {
            if (Number(num)) {
                setPhoneNum(num)
            }
        } else
            setPhoneNum("")
    }

    const handleZipCode = (e) => {
        let num = e.target.value;
        if (num) {
            if (Number(num)) {
                setZip(num)
            }
        } else
            setZip("")
    }

    const handleFormSubmit = () => {
        let errorObj = {
            firstName: false,
            lastName: false,
            country: false,
            address: false,
            city: false,
            zip: false,
            phoneNum: false,
            errorMsg: ""
        }
        if (email)
            errorObj.email = false
        else
            errorObj.email = true
        if (firstName)
            errorObj.firstName = false
        else
            errorObj.firstName = true
        if (lastName)
            errorObj.lastName = false
        else
            errorObj.lastName = true
        if (country)
            errorObj.country = false
        else
            errorObj.country = true
        if (address)
            errorObj.address = false
        else
            errorObj.address = true
        if (city)
            errorObj.city = false
        else
            errorObj.city = true
        if (zip)
            errorObj.zip = false
        else
            errorObj.zip = true
        if (phoneNum)
            errorObj.phoneNum = false
        else
            errorObj.phoneNum = true

        if (errorObj.email || errorObj.firstName || errorObj.lastName || errorObj.country || errorObj.address || errorObj.city || errorObj.zip || errorObj.phoneNum)
            errorObj.errorMsg = "*Please make sure to fill the form correctly."
        else {
            if (validate(email)) {
                error.errorMsg = ""
                dispatch(createOrderShippingInfo(
                    email,
                    firstName,
                    lastName,
                    country,
                    state,
                    address,
                    extraAddress,
                    city,
                    zip,
                    phoneNum,
                    totalOrderPrice))
                setProceed(true)
            }
            else {
                errorObj.errorMsg = "*Please Enter valid email."
                errorObj.email = true
            }
        }
        setError(errorObj)

    }

    return (
        checkoutItems &&
        <div className="checkout">
            <div className="checkout__form">
                <Link to="/">
                    <img className="checkout__logo" src='../images/logohere.png' />
                </Link>
                {proceed ?
                    <StripeContainer />
                    :
                    <>
                        <NavigationTool currentPage="checkout" pagesArrey={['home', 'cart']} center={true} />
                        <div className="checkout__form__wrapper">
                            <div className="checkout__form__title">Contact Details</div>
                            <TextField
                                label="Email"
                                fullWidth variant="outlined"
                                error={error.email}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <div className="checkout__form__title">Shipment Details</div>
                            <div className="checkout__inputWrapper">
                                <TextField
                                    style={{ width: "255px" }}
                                    label="First Name"
                                    margin="dense"
                                    variant="outlined"
                                    error={error.firstName}
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value)}
                                />
                                <TextField
                                    style={{ width: "255px" }}
                                    label="Last Name"
                                    margin="dense"
                                    variant="outlined"
                                    error={error.lastName}
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value)}
                                />
                            </div>
                            <div className="checkout__inputWrapper">
                                <TextField
                                    style={{ width: "355px" }}
                                    error={error}
                                    label="Country"
                                    margin="dense"
                                    variant="outlined"
                                    error={error.country} value={country}
                                    onChange={e => setCountry(e.target.value)}
                                />
                                <TextField
                                    style={{ width: "155px" }}
                                    label="State"
                                    margin="dense"
                                    variant="outlined"
                                    value={state}
                                    onChange={e => setState(e.target.value)}
                                />
                            </div>
                            <TextField
                                fullWidth
                                label="Address"
                                margin="dense"
                                variant="outlined"
                                placeholder="Street address"
                                error={error.address}
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                            />
                            <TextField
                                fullWidth
                                margin="dense"
                                variant="outlined" placeholder="Apt, suite, unit, building, floor, etc."
                                value={extraAddress}
                                onChange={e => setExtraAddress(e.target.value)}
                            />
                            <div className="checkout__inputWrapper">
                                <TextField
                                    style={{ width: "355px" }}
                                    label="City"
                                    margin="dense"
                                    variant="outlined"
                                    error={error.city}
                                    value={city}
                                    onChange={e => setCity(e.target.value)}
                                />
                                <TextField
                                    style={{ width: "155px" }}
                                    label="ZIP Code"
                                    margin="dense"
                                    variant="outlined"
                                    error={error.zip}
                                    value={zip}
                                    onChange={e => handleZipCode(e)}
                                />
                            </div>
                            <TextField
                                fullWidth
                                label="Phone number"
                                margin="dense"
                                variant="outlined"
                                error={error.phoneNum}
                                value={phoneNum}
                                onChange={e => handlePhoneNumber(e)}
                            />
                            <div className="checkout__action__wrapper">
                                <Link className="checkout__backButton" to='/cart'>back to cart</Link>
                                <button className="checkout__paymentButton" onClick={handleFormSubmit}>proceed to payment</button>
                            </div>
                            <div className="errMsg">
                                {error.errorMsg}
                            </div>
                        </div>
                    </>
                }
            </div>
            <div className="checkout__info">
                {checkoutItems.map(item =>
                    <CheckoutItemPreview
                        key={item.id}
                        img={item.img}
                        name={item.name}
                        amount={item.amount}
                        price={item.price}

                    />)}
                <hr />
                <div className="checkout__info__raw">
                    <div>Shipment</div>
                    <div>{`$1`}</div>
                </div>
                <hr />
                <div className="checkout__info__raw">
                    <div className="checkout__subtotal">SUBTOTAL </div>
                    <div className="checkout__subtotal">{`$${totalOrderPrice}`}</div>
                </div>
            </div>

        </div>

    )
}

export default Checkout
