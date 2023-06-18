export const productos = [
    { stock: 10, nombre: "Chevy 75", precio: 2000000, id: "1", img: "../img/auto1.jpg", categoryName: "Clásico" },
    { stock: 10, nombre: "Mustang 78", precio: 350000, id: "2", img: "../img/auto2.jpg", categoryName: "Clásico" },
    { stock: 10, nombre: "Porche 90", precio: 350000, id: "3", img: "../img/auto3.jpg", categoryName: "Clásico" },
    { stock: 10, nombre: "Taos", precio: 50000, id: "4", img: "../img/auto4.jpg", categoryName: "Nuevos" },
    { stock: 10, nombre: "Volvo", precio: 50000, id: "5", img: "../img/auto5.jpg", categoryName: "Nuevos" },
    { stock: 10, nombre: "Harley", precio: 70000, id: "6", img: "../img/moto1.jpg", categoryName: "Motos" },
    { stock: 10, nombre: "Ducati", precio: 75000, id: "7", img: "../img/moto2.jpg", categoryName: "Motos" },
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

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCat) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.categoryName === idCat);
            resolve(productosCategoria);
        }, 100)
    })
}