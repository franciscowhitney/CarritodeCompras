import './Item.css'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from 'react';

const Item = ({ id, nombre, precio, img, isInCart=false, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  const showCartData = () => (
    <>
      <p>Cantidad: {cantidad} </p>
      <p>Precio: {precio} </p>
      <Button variant="dark" onClick={() => eliminarProducto(id)}> Eliminar </Button>
    </>
  )

  const showNoCartData = () => (
    <>
      <p>ID: {id} </p>
      <Link to={`/item/${id}`}><Button variant="dark">Ver detalles</Button></Link>
    </>
  )
  
  return (
    <div className='productListItem'>
        <img className='imgProducto' src={img} alt={nombre} />
        <h3>{nombre} </h3>
      <p>Precio: ${precio}.- </p>
      {isInCart ? showCartData() : showNoCartData()}
    </div>
  )
}

export default Item
