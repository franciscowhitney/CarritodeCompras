import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  return (
    <Link to={'/cart'}>
        <FontAwesomeIcon icon={faCartShopping} />
        &nbsp;
        &nbsp;
      <strong>{cantidadTotal}</strong>
    </Link>
  )
}


export default CartWidget