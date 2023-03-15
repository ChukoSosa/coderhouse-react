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
    const [addItemsloading, setItemsLoading] = useState(false);
    const [product, setProductoSeleccionado] = useState(null);
    const [count, setCount] = useState(1);
    const isDisabled = count === 1;

    const shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];


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

    // >> Redireccionamientos
    function goBack() { navigate('/') }
    function goShopCartList() { navigate('/shop-cart')}

    // >> Agregar al carrito
    function addCart(product, count) {
      setItemsLoading(true)

      const item = {
        id: product.id,
        image: product.image,
        title: product.title,
        price: product.price,
        count: count,
        total: count * product.price
      };
    
      const index = shoppingCart.findIndex((item) => item.id === product.id);
    
      if (index !== -1) {
        shoppingCart[index].count += count;        
      } else {
        shoppingCart.push(item);
      }
    
      localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
      
      setTimeout(() => {
        setItemsLoading(false)
      }, 500);
    }

    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <div className="item_detail_container">
            {product ? (
                <>
                  <div className='product_details'>
                    <div className='container'>

                      <div className='row'>
                        <div className='col-5 text-center'>
                          <img src={product.image} alt='Product details' className='img-fluid' />
                        </div>
                        <div className='col'>

                          <div className='content_wrapper'>
                            <h2 className="title">{product.title}</h2>
                            
                            <h5 className="category"><strong>Categoria: </strong>
                            <span className='text-capitalize'>{product.categoria}</span></h5>
                            <p className="description">{product.description}</p>
                            <span><strong>Stock: </strong> {product.stock - count}</span>
                          </div>

                          <div className='total_wraper row text-end'>
                            <div className='col'>
                              <h1>Total: $ {product.price * count}</h1>
                            </div>
                          </div>
                          
                          <div className='count_wrapper mt-3'>

                            <div className='row'>                              
                              <div className='col-auto'>
                                <button type="button" className="btn btn-secondary" onClick={() => setCount(count - 1)} disabled={isDisabled}>
                                  <FontAwesomeIcon icon="minus" />
                                </button>
                              </div>
                              <div className='col text-center'>
                                <h5 className='mb-0'>{count}</h5>
                              </div>
                              <div className='col-auto'>
                                <button type="button" className="btn btn-secondary" onClick={() => setCount(count + 1)} disabled={count === product.stock}>
                                  <FontAwesomeIcon icon="plus" />
                                </button>
                              </div>
                            </div>

                            <div className='row mt-3'>                      
                              <div className='col'>
                                <button type="button" className="btn btn-primary btn-lg w-100" disabled={product.stock === 0} onClick={() => addCart(product, count)}>
                                  <FontAwesomeIcon className='me-3' icon="shopping-cart" />
                                  Agregar al carrito
                                </button>
                              </div>
                            </div>

                          </div>

                          <div className='row'>
                            <div className='col'>
                              <div className="alert alert-warning mt-3" role="alert">

                              {addItemsloading ? (
                                <div className='text-center'>
                                  Agregando producto..
                                </div>
                              ) : (
                                <>
                                  {shoppingCart.length === 0 ? (                                
                                    <span>Ningún producto fue agregado</span>                                
                                  ) : (
                                    <>
                                      {shoppingCart.map((product) => (
                                        <div>
                                          <p className='mb-0'>
                                            <strong>{product.title}</strong> | Cantidad: {product.count} | Total: ${product.count * product.price}
                                          </p>
                                        </div>
                                      ))}                                
                                    </>
                                  )}
                                </>
                              )}

                              </div>                            
                            </div>
                          </div>

                        </div>
                      </div>



                      <hr />

                      <div className='foo_container'>
                        <div className='row'>
                          <div className='col'>
                            <button onClick={goBack} className='btn btn-secondary'>Volver</button>
                          </div>
                          <div className='col-auto'>
                            <button onClick={goShopCartList} className='btn btn-primary'>Finalizar Compra</button>
                          </div>
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