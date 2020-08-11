import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Product from './components/Product'
import Cart from './components/Cart'

function App() {
  // Crear listado de products
  const [products, saveProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 1000
    },
    {
      id: 2,
      name: 'Product 2',
      price: 2000
    },
    {
      id: 3,
      name: 'Product 3',
      price: 3000
    },
    {
      id: 4,
      name: 'Product 4',
      price: 4000
    }
  ])

  // State para un carrito de compras
  const [cart, addCart] = useState([])

  // Obtener fecha
  const date = new Date().getFullYear()

  return (
    <>
      <Header title='Tienda Virtual' />
      <h1>Lista de Productos</h1>
      {products.map((product) => (
        <Product key={product.id} products={products} product={product} cart={cart} addCart={addCart} />
      ))}

      <Cart cart={cart} addCart={addCart} />
      <Footer date={date} />
    </>
  )
}

export default App
