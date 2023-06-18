import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';

const ItemCount = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);
    
    const incrementar = () => {
        if(contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if(contador > inicial){
            setContador(contador - 1);
        }
    }

  return (
    <><br />
        <div style={{display: "inline"}}>
              <Button variant="dark" onClick={decrementar}> - </Button>
              <span>&nbsp;&nbsp;&nbsp;{contador}&nbsp;&nbsp;&nbsp;</span>
              <Button variant="dark" onClick={incrementar}> + </Button>
              <br />
              <br />
              <Button variant="dark" onClick={() => funcionAgregar(contador)}> Agregar al Carrito </Button>
        </div>
        
    </>
  )
}

export default ItemCount