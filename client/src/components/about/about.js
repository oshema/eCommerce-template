import React from 'react';
import './about.css';

function About() {

    return (
        <div className="about">
            <img className="about__img" src='../../images/aboutPic.jpg' />
            <div className="about__script">
                <div className="about__title">About the product</div>
                <div>Here you can decide to write whatever you want about your product, products or your shop.</div>
                <span className="about__text">The left picture is an example image. You can choose any photo that fits the needs for your landing page.</span>
                <span className="about__text">The left picture is an example image. You can choose any photo that fits the needs for your landing page.</span>
                <span className="about__text">The left picture is an example image. You can choose any photo that fits the needs for your landing page.</span>
                <span className="about__text">The link below will lead you to any page you will choose. Can be a link to all of your products or overall description.</span>
                <button className="about__productsLink">All Products</button>
            </div>
        </div>
    )
}

export default About
