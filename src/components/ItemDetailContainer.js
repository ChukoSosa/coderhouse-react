import './ItemDetailContainer.css'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [producto, setProductoSeleccionado] = useState(null);
    const navigate = useNavigate();

    function goBack() {
        navigate('/');
    }

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
          }, 500);
        } else {
          setLoading(false);
          console.log("Error");
        }
      };
  
      fetchProductos();
    }, []);
  
    useEffect(() => {
      const producto = productos.find((producto) => producto.id === Number(id));
      setProductoSeleccionado(producto);
    }, [id, productos]);
  
    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <div className="item_detail_container">
            {producto ? (
                <>
                  <div className='product-details'>
                    <div className='row'>
                      <div className='col text-center'>
                        <img src={producto.image} alt='Product details' className='img-fluid' />
                      </div>
                      <div className='col'>
                        <h2 className="title">{producto.title}</h2>
                        <h5 className="category"><strong>Categoria: </strong>{producto.categoria}</h5>
                        <p className="description">{producto.description}</p>
                        <p className="price">Precio: $ {producto.precio}</p>
                        <div className='text-center'>
                          <button type="button" className="btn btn-primary btn-lg">
                            COMPRAR
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='row text-center'>
                      <div className='col'>
                        <button onClick={goBack} className='btn btn-secondary'>Volver</button>
                      </div>
                    </div>
                  </div>
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