const express =require('express');
const routes= require('./routes');
const morgan = require('morgan');
const cors = require('cors');

var fs = require('fs');
var https = require('https');

const app = express();

/*
PUERTO
Puerto en el que el servidor se va a subir
*/
app.set('port',process.env.PORT || 9000)



//middlewares
/*
Con morgan se refleja en la consola todas las peticiones que se hacen al servidor(200, 404,500)
Con cors permite que se hagan peticiones desde aplicaciones externas, como por ejemplo desde Vue
*/
app.use(morgan("dev"));
app.use(cors());


// routes
/*
Se presenta las rutas de esta api
*/
app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})
app.use('/api', routes)


//Server running
/*
Aqui se sube el servidor al puerto especificado
*/
https.createServer({
    cert: fs.readFileSync('cert.pem'),
    key: fs.readFileSync('key.pem')
  },
app).listen(app.get('port'),()=>{
    console.log('server running on port',app.get('port'))
})