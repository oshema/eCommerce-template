import React from 'react';
import './mainProducts.css';
import products from '../../products.json'
import ProductCard from '../productCard/productCard';

function MainProducts() {


    return (
        <div className="mainProducts">
            <div className="mainProducts__raw">
                {products.slice(0, 3).map((item) => <ProductCard key={item.id} id={item.id} />)}
            </div>
            <div className="mainProducts__raw mainProducts__raw--gap">
                {products.slice(3, 6).map((item) => <ProductCard key={item.id} id={item.id} />)}
            </div>

        </div>
    )
}

export default MainProducts
