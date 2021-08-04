import React from 'react';
import './contactUs.css';
import NavigationTool from '../../components/navigationTool/navigationTool';

function ContactUs() {
    return (
        <div className="contactUs">
            <NavigationTool currentPage="contact us" />
            <div className="contactUs_title">CONTACT US</div>
            <div className="contactUs_info">Here all your contact details will be written..</div>
        </div>
    )
}

export default ContactUs
