import './ShopCartList.css'
import { getFetch } from '../data/getFetch'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';

const ShopCartList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const cartList = JSON.parse(localStorage.getItem("shoppingCart")) || [];

    // >> Call to API
    useEffect(() => {
      getFetch()
        .then(response => setProducts(response))
        .catch(error => console.error(error))
        .finally( () => setLoading(false))
    }, [])

    // >> Volver a la pagina anterior
    function goBackHome() { navigate('/') }

    function buyProducts() { console.log("Compra realizada! ", products) }
    function onRemove(id) {
      setLoading(true);
      const newCartList = cartList.filter((product) => product.id !== id);
      localStorage.setItem("shoppingCart", JSON.stringify(newCartList));
      setTimeout(() => {
        setLoading(false)
      }, 500);
    }


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

                      {cartList.length === 0 ? (
                        <div className="alert alert-warning mt-3" role="alert">
                          Ningún producto fue agregado
                        </div>
                      ) : (
                        <div className="cart_list">
                          {cartList.map((product) => (
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
                                <button className="btn btn-danger" onClick={() => onRemove(product.id)}>
                                  <FontAwesomeIcon icon="trash" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      </div>

                      <div className='foo_container mt-3'>
                        <div className='row text-end'>
                          <div className='col'>
                            <h2>
                              <strong>Total Final:</strong> $ 3.615
                            </h2>
                          </div>
                        </div>

                        <hr />

                        <div className='row'>
                          <div className='col'>
                            <button onClick={goBackHome} className='btn btn-secondary'>Volver a la lista de productos</button>
                          </div>
                          <div className='col-auto'>
                            <button onClick={buyProducts} className='btn btn-primary'>Pagar</button>
                          </div>
                        </div>                        
                      </div>

                    </div>
                  </div>
          </div>
        )}
      </>
    );
  };
  

export default ShopCartList;