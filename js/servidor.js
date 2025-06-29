//Utilizar el módulo http para crear un servidor básico que responda "Hola, este es un servidor con Node.js" al acceder desde el navegador en http://localhost:3000.

const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

//el script está en 'js/servidor.js' y 'index.html' está en la raíz del proyecto

// indexPath aqui almacenamos la ruta del archivo index.html
const indexPath = path.join(__dirname, '..', 'index.html');
//('..',) En este caso, servidor.js debe subir un nivel (al directorio padre) para poder encontrar index.html, que está en la raíz de mi-proyecto

// Si 'index.html' está en el mismo directorio que 'servidor.js' 
// const indexPath = path.join(__dirname, 'index.html'); 

const server =  http.createServer((req, res) => {
    
        // Leer el archivo index.html
        fs.readFile(indexPath, (error, data) => {
        if(error) {
            // se ejecuta el error y envia un 404 y establece el tipode contenido como texto plano para el mensaje de error
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write("Archivo no encontrado");
        } else {
            // si se lee correctamente enviar un 200
            res.writeHead(200, {'content-type': 'text/html'});
            // enviar el contenido del  archivo HTML
            res.write(data);
        }
        //Termina la respuesta ya sea error o exito
        res.end();
    });
});
server.listen(port, () => {
    console.log(`Servidor funcionando en http://localhost:${port}`);    
});
