/*Diccionario de carrito de compras modelo*/

const productos={
    carro:{id:1, nombre_producto:"Carro", precio_producto:"1000"},
    casa:{id:2, nombre_producto:"Casa", precio_producto:"12000"},
    computadora:{id:3, nombre_producto:"Computadora", precio_producto:"500"},
}

let carro_compras = {}

for (const i in productos){
    carro_compras={
        producto: {producto: productos[i].nombre_producto,},
        id: {id: productos[i].id,},
        precio: {precio: productos[i].precio_producto},
    }
}

console.log(carro_compras.producto)