setTimeout(() => {
    alert("Bienvenid@ a Xpertos en Ofertas!");
}, 1000);
setTimeout(() => {
    alert("Llevando productos por mas de $2.500 el envio es gratis!!");
}, 3000);
setTimeout(() => {
    let entrada = prompt("Ingresar el numero de producto que quieres ( 1 , 2 , 3 )")
    if(entrada== "1"){
    alert ("Elegiste Pack de Brahma , el coste del producto es de $300")
    let cantidad = parseInt(prompt("Ingresa la cantidad que quieres ( 1 , 2 , 3 , 4 , 5 )"));
    alert("Su compra es de " + (cantidad * productos.precio));
    }
    else if (entrada== "2") {
    alert ("Elegiste Pack de Heineken, el coste del producto es de $500")
    let cantidad = prompt ("Ingresa la cantidad que quieres ( 1 , 2 , 3 , 4 , 5 )")
    alert("Su compra es de " + (cantidad * productos.precio));
    alert("Muchas gracias por su compra!")
    }
    else if (entrada == "3"){
    alert ("Elegiste Combo Fernet Con Coca, el coste del producto es de $4000")
    let cantidad = prompt ("Ingresa la cantidad que quieres ( 1 , 2 , 3 , 4 , 5 )")
    alert("Su compra es de " + (cantidad * productos.precio));
    alert("Muchas gracias por su compra!")
    }
    else if (entrada > "3"){
        alert ("Entrada incorrecta, vuelve a intentarlo.")
    }
}, 5000);

let productos = [
    {
    nombre: "Pack de Brahma",
    precio: 300,
    },
    {
    nombre: "Pack de Heineken",
    precio: 500,
    },
    {
    nombre: "Combo Fernet con coca",
    precio: 4000,
    }
];
