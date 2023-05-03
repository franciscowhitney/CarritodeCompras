import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'

const CartWidget = () => {
    
  return (
    <div>
        <FontAwesomeIcon icon={faCartShopping} />
        &nbsp;
        &nbsp;
        <strong>3</strong>
    </div>
  )
}


export default CartWidget