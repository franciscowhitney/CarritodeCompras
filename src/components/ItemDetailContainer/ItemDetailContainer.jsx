import { useState, useEffect } from 'react'
import { getUnProducto } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from "firebase/firestore";
import { db } from '../../services/config';
import { useFirebase } from '../../services/config';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const [dataFetched, setDataFetched] = useState(false);


    const { id } = useParams();

    useEffect(() => {
        if (useFirebase) {
            const nuevoDoc = doc(db, "inventario", id);

            getDoc(nuevoDoc)
                .then(res => {
                    const data = res.data();
                    const nuevoProducto = { id: res.id, ...data }
                    setProducto(nuevoProducto);
                    setDataFetched(true)
                })
                .catch(error => {
                    setDataFetched(true)
                })
        }

    }, [id])

    useEffect(() => {
        if (!useFirebase) {
            getUnProducto(id)
                .then(res => { 
                    setProducto(res)
                    setDataFetched(true)
                })
        }

    }, [id])

    return (
        <>
            {producto && dataFetched && (<ItemDetail {...producto} hasError={!producto.nombre} />)}
        </>
    )
}

export default ItemDetailContainer