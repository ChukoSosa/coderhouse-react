import './ItemListContainer.css'
// API calls
import { getFirestore, doc, getDoc, collection, getDocs } from 'firebase/firestore'

import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import ProductItem from './ProductItem';
import Spinner from './Spinner';
import HomeContent from './HomeContent';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoria } = useParams();
    const [itemsFiltrados, setFiltro] = useState([]);

     // >> Call to API         
    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'Products')

        getDocs(queryCollection)
        .then(res => setProducts( res.docs.map(prod => ({ id: prod.id, ...prod.data() }) )))
            .catch(error => console.error(error))
            .finally( () => setLoading(false))
    }, [])

    // >> Vista de producto por nombre categoria
    useEffect(() => {
        const itemsFiltrados = !categoria ? products : products.filter(product => product.category === categoria);
        setFiltro(itemsFiltrados);
    }, [categoria, products]);

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
                            {itemsFiltrados.map((product, index) => (
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