import React from 'react';
import { Link } from 'react-router-dom'
import './Manu.css';

function Manu() {
    return (
        <div className="manu">
            <div className="manu__wrapper">
                <Link className="manu_linkStyleRemove manu--bold" to="/products">Products</Link>
                <Link className="manu_linkStyleRemove manu--bold" to="/faq">FAQ</Link>
                <Link className="manu_linkStyleRemove manu--bold" to="/contactus">Contact Us</Link>
                <span className="manu--bold">
                    Additional Tab
                </span>
                <span className="manu--bold">
                    Additional Tab
                </span>
            </div>
        </div>
    )
}

export default Manu
