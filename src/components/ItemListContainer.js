import './ItemListContainer.css'
import { getFetch } from '../data/getFetch'

import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import ProductItem from './ProductItem';
import Spinner from './Spinner';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoria } = useParams();
    const [itemsFiltrados, setFiltro] = useState([]);

    const titulo = 'Descubre tu próximo destino con Oasis Viajes'
    const texto_bajada = '¿Estás buscando una experiencia única y emocionante para tus próximas vacaciones? Oasis Viajes es la solución perfecta para ti.'
    const texto_parrafo_1 = 'En Oasis Viajes, nos encargamos de que tus vacaciones sean inolvidables. Ya sea que estés buscando un destino de playa, una ciudad cosmopolita o una aventura en la naturaleza, tenemos todo lo que necesitas para vivir la experiencia de tus sueños. Nuestros paquetes de viajes incluyen todo lo que necesitas, desde vuelos y alojamiento hasta actividades y excursiones, para que no tengas que preocuparte por nada más que disfrutar de tus vacaciones al máximo.'
    const texto_final = '¿Qué estás esperando? ¡Descubre tu próximo destino con Oasis Viajes y vive unas vacaciones inolvidables! Contacta con nosotros para obtener más información y reservar tu viaje hoy mismo.'

     // >> Call to API
     useEffect(() => {
        getFetch()
          .then(response => setProductos(response))
          .catch(error => console.error(error))
          .finally( () => setLoading(false))
    }, [])      
    
    // >> Vista de producto por nombre categoria
    useEffect(() => {
        const itemsFiltrados = !categoria ? productos : productos.filter(producto => producto.categoria === categoria);
        setFiltro(itemsFiltrados);
    }, [categoria, productos]);

    return (
        <div className='item_list_container'>
            <div className='row'>

                <div className='col-3'>
                    {/* TO DO - mover este contenido del sitio a su propio componente */}
                    <div className='bg-light p-4 h-100'>
                        <h3 className='fw-bold mt-2 mb-3'>{titulo}</h3>
                        <h5 className='fw-normal mb-4'>{texto_bajada}</h5>
                        <p className='fs-6 mb-4'>{texto_parrafo_1}</p>
                        <p className='fw-bold fs-6'>{texto_final}</p>
                    </div>
                    {/*---------------------------------------------------------------*/}
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
                            {itemsFiltrados.map((producto, index) => (
                                <div className='col-4' key={index}>
                                    <ProductItem {...producto} />
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