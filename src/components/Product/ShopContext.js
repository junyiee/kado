import React, { createContext, useState } from 'react'
import { PRODUCTS } from './ProductsData';

// to access and modify the state (ShopContextProvider) in both shop and cart
export const ShopContext = createContext(null);

// represents initial state of cart items
const getDefaultCart = () => {
    let cart = {};
    // i = 1 bc id starts at 1
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

// define all state and function, pass to provider
export const ShopContextProvider = (props) => {
    // one state: cartItems and function setCartItems
    // the state is an object with x (# of products) properties
    // cartItems specifies quantity of each product
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        /** grab previous value of the state
         * and set it to the same as before
         * but also add 1 to the specific itemId 
         */
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        /** grab previous value of the state
         * and set it to the same as before
         * but also subtract 1 to the specific itemId 
         */
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    // allows item count to update for manual input
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };

    /**loop through every item in cartItems object
     * check if value is greater than 0
     * multiply price by amount
     * add to total
     */
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                /** find method searches an array that satisfies a condition
                 * find specific product in the array by id
                 * that is equal to the item
                 */
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }

    // object containing all states & function to pass through provider
    const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}