// Elemento de inicio de configuracion de las rutas del backend y de la conexión a la bd con moongose

//  Codigo basico para observar si la conexión con vercel se da /api/index
/*
module.exports =(req,res)=>{
    res.send('Hola mundo he despertado')
}
*/

// dependencias necesarias
const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');
const body = require ('body-parser');

//enrutadores
const usuario = require('./routes/users');
const notas = require('./routes/notas');
const auth = require ('./routes/auth');
// Estableciendo conexión con moongoose
mongoose.connect(process.env.VARIABLE_ENTORNO,{useNewUrlParser:true, useUnifiedTopology:true});

const app= express();
app.use(body.json());
app.use(cors());
app.use('/api/usuarios', usuario);
app.use('/api/notas',notas);
app.use('/api/auth',auth);

module.exports=app;

