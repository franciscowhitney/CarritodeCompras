import React from 'react'

const CartWidget = () => {
    const imgCarrito = "https://thumbs.dreamstime.com/b/s%C3%ADmbolo-de-dise%C3%B1o-vectorial-icono-del-carro-compras-ilustraci%C3%B3n-aislado-en-fondo-blanco-171899296.jpg"; 
  return (
    <div>
        <img src={imgCarrito} alt="Carrito de compras " />
        <strong>3</strong>
    </div>
  )
}


export default CartWidget