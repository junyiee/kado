import React, { useContext } from 'react'
import { ShopContext } from './ShopContext';

function CartItem(props) {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    return (
        <div className="cart-item">
            <img src={productImage} alt={productName} />
            <div className="cart-info">
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
                <div className="count-handler">
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input 
                        value={cartItems[id]} 
                        onChange={(e) => updateCartItemCount(Number(e.target.value), id)} 
                    />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem