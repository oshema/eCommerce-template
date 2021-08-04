import React, { useEffect, useState } from 'react';
import './productCard.css';
import products from '../../products.json';
import { Link, } from "react-router-dom";


function ProductCard({ id, isMoreProducts = false }) {

    const [item, setItem] = useState('')

    useEffect(() => {
        const itemObj = products.filter(item => id == item.id)
        setItem(...itemObj)
    }, [id])

    return (
        <div >
            {item &&
                <Link className="card" to={`/item/${id}`}>
                    <img className={isMoreProducts ? "card__recommendedProductImg" : "card__img"} src={item.img} />
                    <div className="card__title">{item.name}</div>
                    <div className="card__price">{`$${item.price}`}</div>
                </Link>
            }
        </div>
    )
}

export default ProductCard
