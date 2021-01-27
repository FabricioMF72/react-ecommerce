import bcrypt from 'bcryptjs'
const data = {
    users:[
        {
            name:'fabricio',
            email:'admin@example.com',
            password: bcrypt.hashSync('8888', 8),
            isAdmin: true,
        },
        {
            name:'Erick',
            email:'user@example.com',
            password: bcrypt.hashSync('4444', 8),
            isAdmin: false,
        },
    ],
    products:[
        {
            name:'NIKE AIR ZOOM PEGASUS 37',
            category:'Shoes',
            image: 'images/S1.jpg',
            price:150,
            countInStock: 10,
            rating: 4.5,
            numReviews: 5,
            brand:'Nike',
            description:'37 años y millones de kilómetros después, la leyenda sigue viviendo en las Nike Air Zoom Pegasus 37. Nuestro calzado de running más confiable vuela hacia el futuro con una nueva tecnología y un nuevo look'
        }
        ,
        {
            name:'NIKE AIR VAPORMAX 2020',
            category:'Shoes',
            image: 'images/S1.jpg',
            price:120,
            countInStock: 12,
            rating: 2.5,
            numReviews: 51,
            brand:'Nike',
            description:'Las nuevas Nike Air VaporMax 2020 están creadas con un 50% de su peso en contenido reciclado, marcando nuestro camino hacia cero emisiones de carbono y cero desperdicio para ayudar a proteger el futuro del deporte'
        },
        {
            name:'AIR MAX VERONA',
            category:'Shoes',
            image: 'images/S1.jpg',
            price:140,
            countInStock: 0,
            rating: 1.5,
            numReviews: 3,
            brand:'Nike',
            description:'Agrega comodidad y estilo a tu viaje. Un diseño pensado en las mujeres, las Air Max Verona tienen una parte superior de material mixto, cuello de felpa, colores llamativos y el Swoosh cosido. La amortiguación Nike Air se combina con un talón de espuma elevado para un toque moderno.'
        },
        {
            name:'AIR MAX 2090',
            category:'Shoes',
            image: 'images/S1.jpg',
            price:80,
            countInStock: 13,
            rating: 5,
            numReviews: 32,
            brand:'Nike',
            description:'Al actualizar las icónicas Air Max 90, se atreven a ser mejores que ayer. La suela de goma con diseño tipo wafle y las ranuras flexibles de gran tamaño aumentan la tracción y la durabilidad.'
        }
        ,{
            name:'NIKE AIR ZOOM PEGASUS 371',
            category:'Shoes',
            image: 'images/S1.jpg',
            price:120,
            countInStock: 5,
            rating: 4.5,
            numReviews: 23,
            brand:'Nike',
            description:'37 años y millones de kilómetros después, la leyenda sigue viviendo en las Nike Air Zoom Pegasus 37. Nuestro calzado de running más confiable vuela hacia el futuro con una nueva tecnología y un nuevo look'
        }
        ,{
            name:'NIKE AIR ZOOM PEGASUS 372',
            category:'Shoes',
            image: 'images/S1.jpg',
            price:40,
            countInStock: 0,
            rating: 0.5,
            numReviews: 12,
            brand:'Nike',
            description:'37 años y millones de kilómetros después, la leyenda sigue viviendo en las Nike Air Zoom Pegasus 37. Nuestro calzado de running más confiable vuela hacia el futuro con una nueva tecnología y un nuevo look'
        }
        ,{
            name:'NIKE AIR ZOOM PEGASUS 373',
            category:'Shoes',
            image: 'images/S1.jpg',
            price:80,
            countInStock: 2,
            rating: 2.5,
            numReviews: 29,
            brand:'Nike',
            description:'37 años y millones de kilómetros después, la leyenda sigue viviendo en las Nike Air Zoom Pegasus 37. Nuestro calzado de running más confiable vuela hacia el futuro con una nueva tecnología y un nuevo look'
        }
        ,{
            name:'NIKE AIR ZOOM PEGASUS 374',
            category:'Shoes',
            image: 'images/S1.jpg',
            price:55,
            countInStock: 1,
            rating: 4.5,
            numReviews: 8,
            brand:'Nike',
            description:'37 años y millones de kilómetros después, la leyenda sigue viviendo en las Nike Air Zoom Pegasus 37. Nuestro calzado de running más confiable vuela hacia el futuro con una nueva tecnología y un nuevo look'
        }
    ]
}

export default data;