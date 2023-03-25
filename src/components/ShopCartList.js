import './ShopCartList.css'
import { useContext } from 'react';
import { CartContext } from './../context/context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import CheckoutForm from './CheckoutForm';

const ShopCartList = () => {
    const { removeItem, productsList, getTotalPrice, orderId } = useContext(CartContext);

    const [loading, setLoading] = useState(true);

    setTimeout(() => {
      setLoading(false)
    }, 500);

    const navigate = useNavigate();

    // >> Volver a la pagina anterior
    function goBackHome() { navigate('/') }    

    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <div className="item_detail_container">

                  <div className='product_details'>
                    <div className='container'>

                      <div className='row'>

                        <div className='col'>
                          <h3>
                            Productos agregados al carrito:
                          </h3>
                        </div>

                      </div>

                      <div className='row'>

                      {productsList.length === 0 ? (
                          orderId === '' 
                            ? <div className="alert alert-danger" role="alert">
                                Ningún producto fue agregado
                              </div>
                            : <div className="alert alert-success" role="alert">
                              <p>Su orden fue generada exitosamente.</p>
                              <p>Nº de pedido: <b>{orderId}</b></p>
                            </div>

                      ) : (
                        <div className="cart_list">
                          {productsList.map((product) => (
                            // Renderiza los productos del carrito de compras
                            <div className="row align-items-center text-center cart_item" key={product.id}>
                              <div className="col-auto">
                                <div className="cart_item_img">
                                  <img src={product.image} alt={product.title} />
                                </div>
                              </div>
                              <div className="col cart_item_detail text-start">
                                <p>Destino</p>
                                <h4>{product.title}</h4>
                              </div>

                              <div className='col'>
                                <p>Precio unidad</p>
                                <h4>
                                  ${product.price}
                                </h4>
                              </div>

                              <div className='col'>
                                <p>Cantidad</p>
                                <h4>
                                  {product.count}
                                </h4>
                              </div>

                              <div className='col'>
                                <p>Total</p>
                                <h4>
                                  ${product.count * product.price}
                                </h4>
                              </div>

                              <div className='col-auto'>
                                <button className="btn btn-danger" onClick={() => removeItem(product.id)}>
                                  <FontAwesomeIcon icon="trash" />
                                </button>
                              </div>
                            </div>
                          ))}

                          <div className='row mt-5 mb-5 align-items-center'>
                            <div className='col'>
                              <button onClick={goBackHome} className='btn btn-secondary'>Volver a la lista de productos</button>                            
                            </div>
                            <div className='col text-end'>
                              <h2>
                                <strong>Total Final:</strong> $ { getTotalPrice() }
                              </h2>
                            </div>
                          </div>      

                          <hr />

                          <div className='row'>
                            <div className='col mt-3'>
                              <h3>Check-out</h3>
                            </div>
                          </div>

                          <CheckoutForm />
                        </div>
                      )}

                      </div>

                    </div>

                    
                  </div>
          </div>
        )}
      </>
    );
  };
  

export default ShopCartList;