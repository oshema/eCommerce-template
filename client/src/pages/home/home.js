import React from 'react';
import './home.css';
import MainProducts from '../../components/mainProducts/mainProducts';
import About from '../../components/about/about';
import OurCommunity from '../../components/ourCommunity/ourCommunity';

function Home() {
    return (
        <div>
            <img className="home__img" src='../../images/heroSampleImg.jpg' />
            <MainProducts />
            <About />
            <OurCommunity />
        </div>

    )
}

export default Home
