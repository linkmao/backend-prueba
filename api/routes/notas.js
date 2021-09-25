/* Ruta para la implementacion de modelo notas, en realidad quizás esté funcional pero no la desarrolé
por completo */

const express = require ('express');
const router = express.Router();
const Notas = require('../models/notas');


//Metodo para traer todos los docuemntos de la coleccion Notas
router.get('/', (req,res)=>{
   // res.send('consultando el modelo notas con GET');
    Notas.find().exec().then(x=>res.status(200).send(x));
    
});

// Metodo solo para traer solo un documento por id de la coleccion Notas
router.get('/:id', (req,res)=>{
    // res.send('consultando el modelo notas con GET');
     Notas.findById(req.params.id).exec().then(x=>res.status(200).send(x));
     
 });

// Metodo para AGREGAR un Docuemnto nuevo a la coleccion Notas
router.post('/',(req,res)=>{
    Notas.create(req.body).then(x=>res.status(201).send(x));
 });


 // Metodo para ACTUALIZAR un Docuemnto identificado por id de la coleccion Nptas
router.put('/:id', (req,res)=>{
    Notas.findByIdAndUpdate(req.params.id, req.body).then(()=>res.sendStatus(204));
});

 // Metodo para BORRAR un Docuemnto identificado por id de la coleccion Notas
router.delete('/:id',(req,res)=>{
    Notas.findByIdAndDelete(req.params.id).exec().then(()=>res.sendStatus(204));
   
});

module.exports=router;