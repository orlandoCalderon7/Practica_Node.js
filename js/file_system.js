// Usar el módulo fs para leer un archivo de texto y mostrar su contenido en consola

const fs = require('fs');

fs.readFile('texto.txt', 'utf-8', (error, data) =>{
    if(!error) {
        console.log(data);        
    } else {
        console.log('Error: ${error}');        
    }
});