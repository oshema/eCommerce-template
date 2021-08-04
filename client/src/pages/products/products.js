import React from 'react';
import './products.css';
import products from '../../products.json';
import NavigationTool from '../../components/navigationTool/navigationTool';
import ProductCard from '../../components/productCard/productCard';

function Products() {

    return (
        <div className="products">
            <NavigationTool currentPage="products" />
            <div className="products__title">PRODUCTS TITLE</div>
            <div className="products_description">
                <div>Here you write about you products. Quality, properties, type, structure and more</div>
                <div>Or you can write whatever you like :)</div>
            </div>
            <div className="products__raw">
                {products.slice(0, 3).map((item) => <ProductCard key={item.id} id={item.id} />)}
            </div>
            <div className="products__raw products__raw--gap">
                {products.slice(3, 6).map((item) => <ProductCard key={item.id} id={item.id} />)}
            </div>
            <div className="products__raw products__raw--gap">
                {products.slice(6, 9).map((item) => <ProductCard key={item.id} id={item.id} />)}
            </div>

        </div>
    )
}

export default Products
