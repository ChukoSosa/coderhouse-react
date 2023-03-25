import './ItemListContainer.css'
// API calls
import { getFirestore, collection, getDocs, where, query } from 'firebase/firestore'

import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import ProductItem from './ProductItem';
import Spinner from './Spinner';
import HomeContent from './HomeContent';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoria } = useParams();

     // >> Call to API         
    useEffect(() => {
        const db = getFirestore() // firebase
        const filterByCategory = categoria ? where('category', '==', categoria) : '' // filtro por categoria
        
        const queryCollection = query( collection(db, 'Products'), filterByCategory); // query

        // GET products
        getDocs(queryCollection)
            .then(res => setProducts( res.docs.map(prod => ({ id: prod.id, ...prod.data() }) )))
                .catch(error => console.error(error))
                .finally( () => setLoading(false))
        
    }, [categoria]) // refresh si categoria cambia

    return (
        <div className='item_list_container'>
            <div className='row'>

                <div className='col-3'>
                    <HomeContent />
                </div>

                <div className='col'>
                    <div className='mt-2 mb-2'>
                        <strong>categoria:</strong> 
                        <span className='text-capitalize'>{!categoria ? ('todas') : (categoria)}</span>
                    </div>
                
                    {loading ? (
                        <div className='text-center mt-5'>
                            <Spinner />
                        </div>
                        ) : (
                        <div className='row'>
                            {products.map((product, index) => (
                                <div className='col-4' key={index}>
                                    <ProductItem {...product} />
                                </div>
                            ))}
                        </div>
                    )}  
                </div>
            </div>
        </div>
    );
};

export default ItemListContainer;