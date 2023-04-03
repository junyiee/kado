import React, { useContext } from 'react';
import { PRODUCTS } from '../components/Product/ProductsData';
import { ShopContext } from '../components/Product/ShopContext';
import CartItem from '../components/Product/CartItem';
import '../styles/Cart.css';
import { Link } from 'react-router-dom';

function Cart() {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    return (
        <div className="cart">
            <h1 className="cart-title">Cart</h1>
            <div className="cart-items">
                {/* eslint-disable-next-line */}
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />
                    }
                })}
            </div>
            {totalAmount > 0 ? (
                <div className="checkout">
                    <p>Subtotal: ${totalAmount}</p>
                    <Link to='/shop'>
                        <button>Continue Shopping</button>
                    </Link>
                    <button>Checkout</button>
                </div>
            ) : (
                <h3 className="empty">Your Cart is Empty</h3>
            )}
        </div>
    )
}

export default Cart