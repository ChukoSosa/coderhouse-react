import './ItemDetailContainer.css'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

import { useParams } from "react-router-dom";

import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    // >> Call to API
     useEffect(() => {
        const db = getFirestore()
        const queryDoc = doc(db, 'Products', id)

        getDoc(queryDoc)
            .then(res => setProduct( { id: res.id, ...res.data() } ))
            .catch(error => console.error(error))
            .finally( () => setLoading(false))

    }, [])     

    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <div className="item_detail_container">
            {product ? (
                <>
                  <ItemDetail product={ product }/>
                </>
            ) : (
              <p>Producto no encontrado</p>
            )}
          </div>
        )}
      </>
    );
  };
  

export default ItemDetailContainer;