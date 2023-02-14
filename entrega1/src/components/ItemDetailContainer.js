import './ItemDetailContainer.css'

const ItemDetailContainer = ({ title }) => {
    return (
        <>
            <h3 className="item_detail_container_title">{title}</h3>
            <div className="item_detail_container">            
                <div className='row'>
                    <div className='col'>
                        <img src='https://unsplash.it/200/300?image=10' alt='Product details' / >
                    </div>
                    <div className='col'>
                        <h5 className="title">Detalles del producto:</h5>
                        <ul>
                            <li>
                                <strong>Categoria: </strong> lorem
                            </li>
                            <li>
                                <strong>Titulo: </strong> lorem
                            </li>
                            <li>
                                <strong>Descripcion: </strong><br/> lorem
                            </li>
                            <li>
                                <strong>Precio: </strong> lorem
                            </li>
                        </ul>
                        <div>
                            <button type="button" className="btn btn-primary">
                                COMPRAR
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemDetailContainer;