import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import './ItemListContainer.css'
import ProductItem from './ProductItem';
import Spinner from './Spinner';

const ItemListContainer = ({ title }) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoria } = useParams();
    const [itemsFiltrados, setFiltro] = useState([]);

    const titulo = 'Descubre tu próximo destino con Oasis Viajes'
    const texto_bajada = '¿Estás buscando una experiencia única y emocionante para tus próximas vacaciones? Oasis Viajes es la solución perfecta para ti.'
    const texto_parrafo_1 = 'En Oasis Viajes, nos encargamos de que tus vacaciones sean inolvidables. Ya sea que estés buscando un destino de playa, una ciudad cosmopolita o una aventura en la naturaleza, tenemos todo lo que necesitas para vivir la experiencia de tus sueños. Nuestros paquetes de viajes incluyen todo lo que necesitas, desde vuelos y alojamiento hasta actividades y excursiones, para que no tengas que preocuparte por nada más que disfrutar de tus vacaciones al máximo.'
    const texto_final = '¿Qué estás esperando? ¡Descubre tu próximo destino con Oasis Viajes y vive unas vacaciones inolvidables! Contacta con nosotros para obtener más información y reservar tu viaje hoy mismo.'

    useEffect(() => {
        const fetchProductos = () => {
            let condition = true;
            if (condition) {
                setTimeout(() => {
                    setProductos([
                        {
                            "id": 0,
                            "icon": "tree",
                            "categoria": "bosque",
                            "title": "Bariloche",
                            "image": "https://unsplash.it/200/300?'image'=10",
                            "description": "Cabaña aislada en las montañas, rodeada de senderos para caminatas y con vistas espectaculares del paisaje.",
                            "precio": 700,
                            "url": "https://ejemplo.com/leer-mas"
                        },
                        {
                            "id": 1,
                            "icon": "tree",
                            "categoria": "bosque",
                            "title": "Villa La Angostura",
                            "image": "https://unsplash.it/200/300?'image'=11",
                            "description": "Pequeño pueblo rodeado de bosques, con una comunidad amigable y actividades como pesca y equitación.",
                            "precio": 700,
                            "url": "https://ejemplo.com/leer-mas"
                        },
                        {
                            "id": 2,
                            "icon": "umbrella-beach",
                            "categoria": "playa",
                            "title": "Carilo",
                            "image": "https://unsplash.it/200/300?'image'=12",
                            "description": "Resort frente al mar, con cómodas habitaciones y acceso privado a una playa de arena blanca.",
                            "precio": 900,
                            "url": "https://ejemplo.com/leer-mas"
                        },
                        {
                            "id": 3,
                            "icon": "umbrella-beach",
                            "categoria": "playa",
                            "title": "Punta Mogotes",
                            "image": "https://unsplash.it/200/300?'image'=13",
                            "description": "Villa privada con vista al mar, piscina privada y acceso directo a una playa semi-privada.",
                            "precio": 900,
                            "url": "https://ejemplo.com/leer-mas"
                        },
                        {
                            "id": 4,
                            "icon": "mountain",
                            "categoria": "valle",
                            "title": "Entre rios",
                            "image": "https://unsplash.it/200/300?'image'=14",
                            "description": "Granja orgánica en el valle, con huertas, animales de granja y senderos para caminatas por las colinas.",
                            "precio": 500,
                            "url": "https://ejemplo.com/leer-mas"
                        },
                        {
                            "id": 5,
                            "icon": "mountain",
                            "categoria": "valle",
                            "title": "Cordoba",
                            "image": "https://unsplash.it/200/300?'image'=15",
                            "description": "Lodge en la montaña, con amplias vistas panorámicas del valle, instalaciones para practicar deportes al aire libre y actividades para la familia.",
                            "precio": 500,
                            "url": "https://ejemplo.com/leer-mas"
                        }
                    ]);
                    setLoading(false);
                }, 1500);
            } else {
                setLoading(false);
                console.log("Error");
            }
        };

        fetchProductos();
    }, []);        
    
    useEffect(() => {
        const itemsFiltrados = !categoria ? productos : productos.filter(producto => producto.categoria === categoria);
        setFiltro(itemsFiltrados);

    }, [categoria, productos]);

    return (
        <div className='item_list_container'>
            <div className='row'>
                <div className='col-3'>
                    <div className='bg-light p-4'>
                        <h3 className='fw-bold mt-2 mb-3'>{titulo}</h3>
                        <h5 className='fw-normal mb-4'>{texto_bajada}</h5>
                        <p className='fs-6 mb-4'>{texto_parrafo_1}</p>
                        <p className='fw-bold fs-6'>{texto_final}</p>
                    </div>
                </div>

                <div className='col'>
                    <div className='mt-2 mb-2'><strong>categoria:</strong> {!categoria ? ('todas') : (categoria)}</div>
                
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