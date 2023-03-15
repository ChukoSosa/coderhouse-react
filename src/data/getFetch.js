let productos = [
    {
        id: 0,
        icon: "tree",
        categoria: "bosque",
        title: "Bariloche",
        image: "https://unsplash.it/200/300?'image'=10",
        description: "Cabaña aislada en las montañas, rodeada de senderos para caminatas y con vistas espectaculares del paisaje.",
        price: 1250,
        stock: 10,
        url: "https://ejemplo.com/leer-mas"
    },
    {
        id: 1,
        icon: "tree",
        categoria: "bosque",
        title: "Villa La Angostura",
        image: "https://unsplash.it/200/300?'image'=11",
        description: "Pequeño pueblo rodeado de bosques, con una comunidad amigable y actividades como pesca y equitación.",
        price: 1750,
        stock: 8,
        url: "https://ejemplo.com/leer-mas"
    },
    {
        id: 2,
        icon: "umbrella-beach",
        categoria: "playa",
        title: "Carilo",
        image: "https://unsplash.it/200/300?'image'=12",
        description: "Resort frente al mar, con cómodas habitaciones y acceso privado a una playa de arena blanca.",
        price: 980,
        stock: 4,
        url: "https://ejemplo.com/leer-mas"
    },
    {
        id: 3,
        icon: "umbrella-beach",
        categoria: "playa",
        title: "Punta Mogotes",
        image: "https://unsplash.it/200/300?'image'=13",
        description: "Villa privada con vista al mar, piscina privada y acceso directo a una playa semi-privada.",
        price: 870,
        stock: 0,
        url: "https://ejemplo.com/leer-mas"
    },
    {
        id: 4,
        icon: "mountain",
        categoria: "valle",
        title: "Entre rios",
        image: "https://unsplash.it/200/300?'image'=14",
        description: "Granja orgánica en el valle, con huertas, animales de granja y senderos para caminatas por las colinas.",
        price: 1115,
        stock: 9,
        url: "https://ejemplo.com/leer-mas"
    },
    {
        id: 5,
        icon: "mountain",
        categoria: "valle",
        title: "Cordoba",
        image: "https://unsplash.it/200/300?'image'=15",
        description: "Lodge en la montaña, con amplias vistas panorámicas del valle, instalaciones para practicar deportes al aire libre y actividades para la familia.",
        price: 1500,
        stock: 5,
        url: "https://ejemplo.com/leer-mas"
    }
]

/**
 * // TO DO 
 * // Mejorar esta funcion para recibir parametros
 * Ejemplo:
 * @param {string} type // >> type the llamada (filtrar por id, categoria, etc)
 * @param {string} id // >> id producto
 * @returns Promise
 */
export const getFetch = () => new Promise((response, rejected) => {
    if(productos) {
      setTimeout(() => {
        response(productos)
      }, 500)
    } else {
      rejected('Error');
    }
});