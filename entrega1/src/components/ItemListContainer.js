import './ItemListContainer.css'
import ProductItem from './ProductItem';

const ItemListContainer = ({ title }) => {
    // data
    const productos = [
        {
            icon: 'tree',
            categoria: "bosque",
            title: 'Bariloche',
            image: 'https://unsplash.it/200/300?image=10',
            description: 'Cabaña aislada en las montañas, rodeada de senderos para caminatas y con vistas espectaculares del paisaje.',
            precio: 700,
            url: 'https://ejemplo.com/leer-mas'
        },
        {
            icon: 'tree',
            categoria: "bosque",
            title: 'Villa La Angostura',
            image: 'https://unsplash.it/200/300?image=11',
            description: 'Pequeño pueblo rodeado de bosques, con una comunidad amigable y actividades como pesca y equitación.',
            precio: 700,
            url: 'https://ejemplo.com/leer-mas'
        },
        {
            icon: 'umbrella-beach',
            categoria: "playa",
            title: 'Carilo',
            image: 'https://unsplash.it/200/300?image=12',
            description: 'Resort frente al mar, con cómodas habitaciones y acceso privado a una playa de arena blanca.',
            precio: 900,
            url: 'https://ejemplo.com/leer-mas'
        },
        {
            icon: 'umbrella-beach',
            categoria: "playa",
            title: 'Punta Mogotes',
            image: 'https://unsplash.it/200/300?image=13',
            description: 'Villa privada con vista al mar, piscina privada y acceso directo a una playa semi-privada.',
            precio: 900,
            url: 'https://ejemplo.com/leer-mas'
        },
        {
            icon: 'mountain',
            categoria: "valle",
            title: 'Entra rios',
            image: 'https://unsplash.it/200/300?image=14',
            description: 'Granja orgánica en el valle, con huertas, animales de granja y senderos para caminatas por las colinas.',
            precio: 500,
            url: 'https://ejemplo.com/leer-mas'
        },
        {
            icon: 'mountain',
            categoria: "valle",
            title: 'Cordoba',
            image: 'https://unsplash.it/200/300?image=15',
            description: 'Lodge en la montaña, con amplias vistas panorámicas del valle, instalaciones para practicar deportes al aire libre y actividades para la familia.',
            precio: 500,
            url: 'https://ejemplo.com/leer-mas'
        }
    ];

    return (
        <div className='item_list_container'>
            <h3 className='title'>{title}</h3>
            <div className='row'>
                {productos.map((producto, index) => (
                    <div className='col-3'>
                        <ProductItem
                            key={index}
                            icon={producto.icon}
                            categoria={producto.categoria}
                            title={producto.title}
                            image={producto.image}
                            description={producto.description}
                            precio={producto.precio}
                            url={producto.url}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;