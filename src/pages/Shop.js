import React from 'react'
import { PRODUCTS } from '../Products'
import Product from '../components/Product/Product'
import '../styles/Shop.css'

function Shop() {
  return (
    <div className="shop">
        <h1 className="shop-title">Shop</h1>
        <div className="products">
            {PRODUCTS.map((product) => (
                <Product data={product}/>
            ))}
        </div>
    </div>
  )
}

export default Shop