import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProductos, getProductosPorCategoria } from '../../asyncmock'
import { useParams } from 'react-router-dom'
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../../services/config';
import { useFirebase } from '../../services/config'

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    if (!useFirebase) {
      const funcionProductos = categoryId ? getProductosPorCategoria : getProductos;

      funcionProductos(categoryId)
        .then(res => setProductos(res))
        .catch(error => console.error(error))
    }
  }, [categoryId])

  useEffect(() => {
    if (useFirebase) {
      const misProductos = categoryId ? query(collection(db, "inventario"), where("categoryName", "==", categoryId)) : collection(db, "inventario");
      getDocs(misProductos)
        .then(res => {
          const nuevosProductos = res.docs.map(doc => {
            const data = doc.data()
            return { id: doc.id, ...data }
          })
          setProductos(nuevosProductos);
        })
        .catch(error => console.log(error))
    }
  }, [categoryId])

  
  return (<div class="productsList">
    <div className="centered">{saludo}</div>
    <ItemList productos={productos} />
  </div>
  )
}

export default ItemListContainer