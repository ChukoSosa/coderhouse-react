import './ItemDetailContainer.css'
import { getFetch } from '../data/getFetch'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

    // >> Call to API
    useEffect(() => {
      getFetch()
        .then(response => setProductos(response))
        .catch(error => console.error(error))
        .finally( () => setLoading(false))
    }, [])

    // >> Vista de producto por ID
    useEffect(() => {
      const producto = productos.find((producto) => producto.id === Number(id));
      setProductoSeleccionado(producto);
    }, [id, productos]);

    // >> Volver a la pagina anterior
    function goBack() { navigate('/') }

    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <div className="item_detail_container">
            {producto ? (
                <>
                  <div className='product_details'>
                    <div className='row'>
                      <div className='col text-center'>
                        <img src={producto.image} alt='Product details' className='img-fluid' />
                      </div>
                      <div className='col'>
                        <h2 className="title">{producto.title}</h2>
                        <h5 className="category"><strong>Categoria: </strong><span className='text-capitalize'>{producto.categoria}</span></h5>
                        <p className="description">{producto.description}</p>
                        <p className="price">Precio: $ {producto.precio}</p>
                        <div className='button_wrapper'>
                          <button onClick={goBack} className='btn btn-secondary btn-lg'>Volver</button>
                          <button type="button" className="btn btn-primary btn-lg ms-auto">
                            <FontAwesomeIcon className='me-3' icon="shopping-cart" />
                            Comprar
                          </button>
                        </div>
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