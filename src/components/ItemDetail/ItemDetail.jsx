import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react';
import PageWrapper from '../common/PageWrapper'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'

const ItemDetail = ({ id, nombre, precio, img, stock, descripcion, hasError }) => {

  const navigate = useNavigate()
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const { agregarProducto } = useContext(CarritoContext);
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio, img };
    agregarProducto(item, cantidad);
  }

  const showButtons = () => (<>
    <br />
    <div className="row">
      <div className="col withResponsiveMarginBottom">
        <Link to="/"><Button variant="dark">Seguir comprando</Button></Link>
      </div>
      <div className="col">
        <Link to="/cart"><Button variant="dark">Terminar compra</Button></Link>
      </div>
    </div>
  </>)

  return (
    <PageWrapper maxWidth={"900"}>
      <>
        <Button onClick={ () => navigate(-1)} variant="dark">Volver</Button>
        {!hasError && (<>
          
          <br />
          <br />
          <div className='contenedorItem'>
            <h2>Nombre: {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <h3>ID: {id} </h3>
            <p> <h3>Descripcion</h3> {descripcion}</p>
            <img src={img} alt={nombre} />
            <br />
            {
              agregarCantidad > 0 ? showButtons() : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
            }
          </div></>
        )}
        {hasError && (<>
          <div>
            <h2>
              El producto solicitado no existe.
            </h2>
          </div>
        </>)}
      </>
    </PageWrapper>)
}

export default ItemDetail