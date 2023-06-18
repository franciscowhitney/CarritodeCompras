import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map(prod => { 
        if (prod.stock > 0) return <Item key={prod.id} {...prod} />
        else return null;
      })}
    </>
  )
}

export default ItemList