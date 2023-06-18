import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import PageWrapper from "../common/PageWrapper"
import './Cart.css'
import Button from 'react-bootstrap/Button';
import Item from "../Item/Item"


const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <PageWrapper maxWidth={"400"}>
                <div style={{ textAlign: "center" }}>
                    <Link to='/'><Button variant="dark">Ver Productos</Button></Link>
                </div>
                <br />
                <h2> No hay productos en el carrito</h2>
            </PageWrapper>
        )
    }
    return (
        <PageWrapper>
            <>
                <div className="productsList">
                    {carrito.map(producto => 
                        <Item isInCart key={producto.item.id} {...producto.item} cantidad={producto.cantidad} />
                        )}
                </div>
                <h3>Total: ${total} </h3>
                <h3>Cantidad total: {cantidadTotal} </h3>
                
                <div className="cartButtons">
                    <div className="cartButton">
                        <Link to={'/'}>
                            <Button variant="dark">Seguir comprando</Button>
                        </Link>
                    </div>
                    <div className="cartButton">
                        <Button variant="dark" onClick={() => vaciarCarrito()}> Vaciar carrito </Button>
                    </div>
                    <div className="cartButton">
                        <Link to='/checkout'><Button variant="dark">Finalizar compra</Button></Link>
                    </div>  
                </div>
                
            </>
        </PageWrapper>
    )
}

export default Cart