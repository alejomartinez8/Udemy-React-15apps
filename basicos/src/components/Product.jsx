import React from 'react'

const Product = ({ products, product, cart, addCart }) => {
  const { name, price, id } = product

  // Agregar producto al carrito
  const addProduct = (id) => {
    const product = products.filter((elm) => elm.id === id)[0]
    addCart([...cart, product])
  }

  // Eliminar product
  const deleteProduct = (id) => {
    const products = cart.filter((product) => product.id !== id)
    addCart(products)
  }

  return (
    <div>
      <h2>{name}</h2>
      <p>${price}</p>

      {products ? (
        <button type='button' onClick={() => addProduct(id)}>
          Comprar
        </button>
      ) : (
        <button type='button' onClick={() => deleteProduct(id)}>
          Eliminar
        </button>
      )}
    </div>
  )
}

export default Product
