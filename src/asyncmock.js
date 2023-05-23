const productos = [
    { nombre: "Chevy", precio: 2000000, id: "1", img: "../img/auto1.jpg", categoryName: "Clasico" },
    { nombre: "Mustang", precio: 350000, id: "2", img: "../img/auto2.jpg", categoryName: "Clasico" },
    { nombre: "Porche", precio: 350000, id: "3", img: "../img/auto3.jpg", categoryName: "Clasico" },
    { nombre: "Taos", precio: 50000, id: "4", img: "../img/auto4.jpg", categoryName: "Nuevos" },
    { nombre: "Volvo", precio: 50000, id: "5", img: "../img/auto5.jpg", categoryName: "Nuevos" },
    { nombre: "Harley", precio: 70000, id: "6", img: "../img/moto1.jpg", categoryName: "Motos" },
    { nombre: "Ducati", precio: 75000, id: "7", img: "../img/moto2.jpg", categoryName: "Motos" },
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