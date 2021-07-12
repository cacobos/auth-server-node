const express = require('express')
const cors = require('cors')
const { dbConnection } = require('./db/config')
require('dotenv').config()

port = process.env.PORT

//Crear el servidor de express
const app = express()

//Conectamos con la base de datos
dbConnection();

//Directorio público
app.use(express.static('public'))

//CORS
app.use(cors())

//Lectura y parseo del body
app.use( express.json() )

//Crear el middleware
app.use( '/api/auth', require('./routes/auth') )

app.listen(port , () => {
    console.log(`Servidor escuchando en puerto ${port}`)
})