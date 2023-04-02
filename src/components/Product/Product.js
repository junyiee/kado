import React from 'react'

function Product(props) {
    // grabs data from props
    const { id, productName, price, productImage } = props.data;
    return (
        <div className="product">
            <img src={productImage} alt={id}/>
            <div className="product-info">
                <p>
                    <b>{productName}</b>
                </p>
                <p>{price}</p>
            </div>
            <button className="shop-btn">Add To Cart</button>
        </div>
    )
}

export default Product