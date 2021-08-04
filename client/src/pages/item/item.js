import React, { useEffect, useState } from 'react';
import './item.css';
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import products from '../../products.json';
import NavigationTool from '../../components/navigationTool/navigationTool.js';
import ProductCard from '../../components/productCard/productCard';
import { addToCart, incrementProduct } from '../../redux/actions/checkoutActions';

function Item() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const existsProducts = useSelector(state => state.checkout.products)
    let history = useHistory();

    const [item, setItem] = useState('')
    const [moreProducts, setMoreProducts] = useState('')

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })

        const itemObj = products.filter(item => id == item.id)
        setItem(...itemObj);
        productRecommendation();
    }, [id])

    const changeMainPic = (newPic) => {
        let newAltList = item.altPics.filter((alt) => newPic !== alt)
        newAltList.push(item.img)
        setItem({ ...item, altPics: newAltList, img: newPic })
    }

    const productRecommendation = () => {
        let productsPick = []
        let productsCopy = [...products]
        let productsArray = productsCopy.filter(item => id !== item.id)
        for (let i = 0; i < 4; i++) {
            let numPick = [Math.floor(Math.random() * productsArray.length)]
            productsPick.push(productsArray[numPick])
            productsArray.splice(numPick, 1)
        }
        setMoreProducts(productsPick)
    }

    const addItemToCart = () => {
        const isProductInCart = existsProducts.filter(product => product.id === item.id)
        if (isProductInCart.length === 0)
            dispatch(addToCart(item.id))
        else
            dispatch(incrementProduct(item.id))
        const path = "/cart"
        history.push(path)
    }

    return (
        item &&
        <div className="item">
            <NavigationTool currentPage={item.name} />
            <div className="item__wrapper">
                <div>
                    <img className="item__img" src={item.img} alt={item.name} />
                    <div className="item__altImg__wrapper">
                        <button className="altImg--button" onClick={() => changeMainPic(item.altPics[0])}><img className="altImg" src={item.altPics[0]} alt={item.name} /></button>
                        <button className="altImg--button" onClick={() => changeMainPic(item.altPics[1])}><img className="altImg" src={item.altPics[1]} alt={item.name} /></button>
                        <button className="altImg--button" onClick={() => changeMainPic(item.altPics[2])}><img className="altImg" src={item.altPics[2]} alt={item.name} /></button>
                        <button className="altImg--button" onClick={() => changeMainPic(item.altPics[3])}><img className="altImg" src={item.altPics[3]} alt={item.name} /></button>
                        <button className="altImg--button" onClick={() => changeMainPic(item.altPics[4])}><img className="altImg" src={item.altPics[4]} alt={item.name} /></button>
                    </div>
                </div>
                <div className="item__info">
                    <div className="item__title">
                        {item.name}
                    </div>
                    <div className="item__price">
                        {`$${item.price}`}
                    </div>
                    <button className="item--addToCartButton" onClick={addItemToCart} >
                        add to cart
                    </button>
                    <div>
                        Here you can write, what the product includes.
                        You can also add description, shipping time and anything you want.
                        You can have seperate columns for each title you want to share here.
                    </div>
                    <hr />
                    <div className="item__subtitle">
                        the design
                    </div>
                    <div>
                        Just some sample taxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </div>
                    <hr />
                    <div className="item__subtitle">
                        another title
                    </div>
                    <div>
                        Just some sample taxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </div>
                </div>
            </div>
            <div className="item__moreProducts__title">
                more products
            </div>
            <div className="item__moreProducts__wrapper">
                {
                    moreProducts.map((item) => {
                        return (
                            <div key={item.id} className="item__recommendedProduct">
                                <ProductCard id={item.id} isMoreProducts={true} />
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default Item
