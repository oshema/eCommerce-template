import React from 'react';
import { Link } from 'react-router-dom'
import './Manu.css';

function Manu() {
    return (
        <div className="manu">
            <div className="manu__wrapper">
                <Link className="manu_linkStyleRemove" to="/products">Products</Link>
                <Link className="manu_linkStyleRemove" to="/faq">FAQ</Link>
                <Link className="manu_linkStyleRemove" to="/contactus">Contact Us</Link>
                <span>
                    Additional Tab
                </span>
                <span>
                    Additional Tab
                </span>
            </div>
        </div>
    )
}

export default Manu
