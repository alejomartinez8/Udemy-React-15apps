import React from 'react'
import './cart.css'
import Product from './Product'
const Cart = ({ cart, addCart }) => {
  return (
    <div className='cart'>
      <h2>Tu carrito de compras</h2>
      {cart.length === 0 ? (
        <p>Carrito vacío</p>
      ) : (
        cart.map((product) => <Product key={product.id} product={product} cart={cart} addCart={addCart} />)
      )}
    </div>
  )
}

export default Cart
