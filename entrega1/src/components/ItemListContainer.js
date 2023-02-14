import Widget from './Widget';

const ItemListContainer = ({ greeting }) => {
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

    // data
    const widgets = [
        {
            icon: 'tree',
            categoria: "bosque",
            title: 'Bosque 1',
            image: 'https://unsplash.it/200/300?image=10',
            description: 'Cabaña aislada en las montañas, rodeada de senderos para caminatas y con vistas espectaculares del paisaje.',
            precio: 700,
            url: 'https://ejemplo.com/leer-mas'
        },
        {
            icon: 'tree',
            categoria: "bosque",
            title: 'Bosque 2',
            image: 'https://unsplash.it/200/300?image=11',
            description: 'Pequeño pueblo rodeado de bosques, con una comunidad amigable y actividades como pesca y equitación.',
            precio: 700,
            url: 'https://ejemplo.com/leer-mas'
        },
        {
            icon: 'umbrella-beach',
            categoria: "playa",
            title: 'Playa 1',
            image: 'https://unsplash.it/200/300?image=12',
            description: 'Resort frente al mar, con cómodas habitaciones y acceso privado a una playa de arena blanca.',
            precio: 900,
            url: 'https://ejemplo.com/leer-mas'
        },
        {
            icon: 'umbrella-beach',
            categoria: "playa",
            title: 'Playa 2',
            image: 'https://unsplash.it/200/300?image=13',
            description: 'Villa privada con vista al mar, piscina privada y acceso directo a una playa semi-privada.',
            precio: 900,
            url: 'https://ejemplo.com/leer-mas'
        },
        {
            icon: 'mountain',
            categoria: "valle",
            title: 'Valle 1',
            image: 'https://unsplash.it/200/300?image=14',
            description: 'Granja orgánica en el valle, con huertas, animales de granja y senderos para caminatas por las colinas.',
            precio: 500,
            url: 'https://ejemplo.com/leer-mas'
        },
        {
            icon: 'mountain',
            categoria: "valle",
            title: 'Valle 2',
            image: 'https://unsplash.it/200/300?image=15',
            description: 'Lodge en la montaña, con amplias vistas panorámicas del valle, instalaciones para practicar deportes al aire libre y actividades para la familia.',
            precio: 500,
            url: 'https://ejemplo.com/leer-mas'
        }
    ];

    return (
        <div style={wrapper}>
            <h3 style={message}>{greeting}</h3>
            <div className='row'>
                {widgets.map((widget, index) => (
                    <div className='col-3'>
                        <Widget
                            key={index}
                            icon={widget.icon}
                            categoria={widget.categoria}
                            title={widget.title}
                            image={widget.image}
                            description={widget.description}
                            precio={widget.precio}
                            url={widget.url}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;