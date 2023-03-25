import { useContext, useState } from 'react';
import { CartContext } from './../context/context';
import Spinner from './Spinner';
import { addDoc, collection, getFirestore } from 'firebase/firestore';


const CheckoutForm = () => {
    // >> User data for checkout
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: '',
        confirmEmail: ''
    });

    // >> set loading false
    const [loading, setLoading] = useState(false);

    // >> flag for email validation false
    const [validEmail, setValidEmail] = useState(false);

    // >> context utilities
    const {
        productsList,
        clearCart,
        addOrder,
        getTotalPrice
    } = useContext(CartContext);

    // >> Creacion de orden de compra
    const createOrder = (event) => {
        event.preventDefault();

        setLoading(true); // add loading

        // >> Firebase settings
        const db = getFirestore();
        const queryCollection = collection(db, 'Orders');

        // >> Email validation
        if (dataForm.email === dataForm.confirmEmail) {
            setValidEmail(false);

            delete dataForm.confirmEmail;
            const order = {
                buyer: dataForm,
                total: getTotalPrice(),
                items: productsList
            };

            // POST orden de compra
            addDoc(queryCollection, order)
                .then((resp) => {
                    addOrder(resp.id)
                })
                .catch(resp => console.error(resp))
                .finally(() => {
                    clearCart();
                    setDataForm({
                        name: '',
                        phone: '',
                        email: ''
                    });

                    setLoading(false); // remove loading
                })
        } else {
            setValidEmail(true);
            setLoading(false);
        }
    };

    // >> Function update the state of the form.
    const handlerOnChange = (event) => {
        setDataForm({
            ...dataForm,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className='container'>
            {
                loading
                    ? <Spinner />
                    :

                    <>
                        <form className="form-group" onSubmit={createOrder}>
                            <div className='row'>
                                <div className='col'>
                                    <div>
                                        <p>Credit Card</p>
                                        <img src='https://dummyimage.com/300x142' />
                                    </div>

                                    <div className='row mt-3'>
                                        <div className='col'>
                                            <label>Number:</label>
                                            <input className='form-control mb-1' type="number" name='credit card number' placeholder='Credit Card number' />
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col'>
                                            <label>Vencimiento:</label>
                                            <input className='form-control mb-1' type="number" name='date' placeholder='MM/AA' />
                                        </div>
                                        <div className='col'>
                                            <label>Codigo:</label>
                                            <input className='form-control mb-1' type="number" name='num' placeholder='NUM' />
                                        </div>
                                    </div>
                                </div>

                                <div className='col'>

                                    <p className='mt-2'>Ingrese sus datos para generar la orden:</p>
                                    <label>Nombre y apellido:</label>
                                    <input value={dataForm.name} className='form-control mb-3' type="text" name='name' placeholder='ingresar nombre' onChange={handlerOnChange} required />
                                    <label>Telefono:</label>
                                    <input value={dataForm.phone} className='form-control mb-3' type="number" name='phone' placeholder='ingresar telefono' onChange={handlerOnChange} required />
                                    <label>Email:</label>
                                    <input value={dataForm.email} className='form-control mb-3' type="text" name='email' placeholder='ingresar email' onChange={handlerOnChange} required />
                                    <label>Confirmar Email:</label>
                                    <input value={dataForm.confirmEmail} className='form-control mb-3' type="text" name='confirmEmail' placeholder='Repetir email' onChange={handlerOnChange} required />
                                    {
                                        validEmail ? <div className="alert alert-danger" role="alert">Email no valido.</div> : ''
                                    }

                                </div>
                            </div>

                            <div className='w-100 mt-3 text-end'>
                                <button type="submit" className='btn btn-success mt-2'>Crear Orden</button>
                            </div>
                        </form>

                    </>
            }
        </div>
    )
}

export default CheckoutForm;