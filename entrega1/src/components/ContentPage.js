const ItemListContainer = ({ title }) => {
    // styles
    const wrapper = {
        border: "1px solid black", 
        padding: "20px", 
        margin: "30px auto",
        maxWidth: "1200px"
    }

    const message = {
        fontSize: '42px',
        marginTop: '15px',
        marginBottom: '15px'
    }

    const paragraph = {
        marginLeft: '60px',
        marginRight: '60px',
    }

    return (
        <div style={wrapper}>
            <h3 style={message}>{title}</h3>
            <div className='row'>
                <div className='col'>
                    <p style={paragraph}>
                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ItemListContainer;