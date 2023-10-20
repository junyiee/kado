import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';

function Product(props) {
    // grabs data from props
    const { id, productName, price, productImage } = props.data;

    // grants functionality from context
    const { addToCart, cartItems } = useContext(ShopContext);

    // grab number of item by id
    const cartItemAmount = cartItems[id];

    return (
        <div className="product">
            <img src={productImage} alt={productName}/>
            <div className="product-info">
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
            </div>
            <button className="addToCartBtn" onClick={() => addToCart(id)}>
                {/* simple ui within <> to put parenthesis around amount */}
                Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
            </button>
        </div>
    )
}

export default Product