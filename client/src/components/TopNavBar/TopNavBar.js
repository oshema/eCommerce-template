import React from 'react';
import './TopNavBar.css';
import { Link, } from "react-router-dom";
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';

function TopNavBar() {

    const checkout = useSelector(state => state.checkout)

    // Material UI Styling //
    const useStyles = makeStyles({
        icon: {
            color: "white",
            fontSize: "20px",
        }
    })

    const classes = useStyles();
    // Material UI Styling //

    return (
        <div className="topNavbar">
            <div className="topNavbar__wrapper">
                <Link className="topNavbar__iconWrapper" to='/cart'>
                    <ShoppingCartOutlinedIcon className={classes.icon} />
                    <div className="topNavbar__iconText">Cart: {checkout.products.length}</div>
                </Link>
                <div className="topNavbar__iconWrapper">
                    <LocalShippingOutlinedIcon />
                    <div className="topNavbar__iconText">International Shipping</div>
                </div>
            </div>
        </div>
    )
}

export default TopNavBar
