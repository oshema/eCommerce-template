import React from 'react';
import './bottomBlackStrip.css';
import { makeStyles } from '@material-ui/core/styles';
import PaymentIcon from '@material-ui/icons/Payment';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import EcoIcon from '@material-ui/icons/Eco';

function BottomBlackStrip() {

    // Material UI Styling //
    const useStyles = makeStyles({
        iconColor: {
            color: "white",
            fontSize: "40px",
            paddingBottom: "10px"
        },
    })

    const classes = useStyles();
    // Material UI Styling //


    return (

        <div className="bottomBlackStrip">
            <div className="bottomBlackStrip__wrapper">
                <div>
                    <div><PaymentIcon className={classes.iconColor} /></div>
                    <div>Secure Payment</div>
                </div>
                <div>
                    <div><AlarmOnIcon className={classes.iconColor} /></div>
                    <div>Fast Shipping</div>
                </div>
                <div>
                    <div><EcoIcon className={classes.iconColor} /></div>
                    <div>Ecological product</div>
                </div>
            </div>
        </div>

    )
}

export default BottomBlackStrip
