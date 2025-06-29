//Implementar una función que lea un archivo de manera asíncrona usando fs.readFile y muestre su contenido después de un mensaje de "Leyendo archivo...".
//importar modulo 'fs'
const fs = require ('fs')

//Estamos definiendo la ruta del archivo
function leerArchvioAsincrono(rutaArchivo) {
    console.log("Leyendo archivo...");
     // Leer el archivo
    fs.readFile(rutaArchivo, 'utf-8', (error, datos) =>{
        // Si hay un error lo muestra en consola
        if(error){
            console.log("Error al leer el archvio: ", error);
            // sale de la función de callback
            return;
        }
        // si la función es exitosa            
        console.log(datos);               
    });    
}

leerArchvioAsincrono('archivo.txt');
