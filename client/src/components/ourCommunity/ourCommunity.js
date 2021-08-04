import React from 'react';
import './ourCommunity.css';

function OurCommunity() {
    return (
        <div className="community">
            <div className="community__reviews">
                <div className="community__quote">❝ I bought the Sahara board from you a month ago. Im very happy with the product and can't stop using it.❞</div>
                <div className="community__name">Chris Goldman</div>
                <div>⭐⭐⭐⭐⭐</div>
            </div>
            <img className="community__imgBG" src='../../images/imgbg.png' />
            <img className="community__imageOne" src='../../images/imgOne.jpg' />
            <img className="community__imageTwo" src='../../images/imgTwo.jpg' />
            <img className="community__imageThree" src='../../images/imgThree.jpg' />
        </div>
    )
}

export default OurCommunity
