const productos = [
    { nombre: "Carro clasico", precio: 500, id: "1", img: "../img/img1.jpg", categoryName: "Clasico" },
    { nombre: "Camioneta", precio: 180, id: "2", img: "../img/img2.jpg", categoryName: "Camioneta" },
    { nombre: "Camioneta 2", precio: 180, id: "2", img: "../img/img3.jpg", categoryName: "Camioneta" },
    { nombre: "Bicicleta 1", precio: 200, id: "3", img: "../img/img4.jpg", categoryName: "Biclos" },
    { nombre: "Bicicleta 2", precio: 300, id: "3", img: "../img/img4.jpg", categoryName: "Biclos" },
    { nombre: "Bicicleta 3", precio: 400, id: "3", img: "../img/img4.jpg", categoryName: "Biclos" },
    { nombre: "Moto", precio: 400, id: "4", img: "../img/img5.jpg", categoryName: "Motos" },
    { nombre: "Moto 2", precio: 400, id: "4", img: "../img/img5.jpg", categoryName: "Motos" },
];

const getCategoriesFromProducts = () => { 
    const categories = productos.map((producto) => { 
        return producto.categoryName;
    })
    let result = categories.filter((item,index) => {
        return categories.indexOf(item) === index;
    })
    return result;
}

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}

export const getCategorias = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(getCategoriesFromProducts())
        }, 100)
    })
}

//Creamos una nueva función similar a la anterior pero que nos retorne un solo item:

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

//Creamos una nueva función que retorna toda la categoría. 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.categoryName === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}