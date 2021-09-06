const express = require ('express');
const router = express.Router();
const Users = require('../models/users');


//Metodo para traer todos los docuemntos de la coleccion usuario
router.get('/', (req,res)=>{
   // res.send('consultando el modelo usuarios con GET');
    Users.find().exec().then(x=>res.status(200).send(x));
    
});

// Metodo solo para traer solo un documento por id de la coleccion usuario
router.get('/:id', (req,res)=>{
    // res.send('consultando el modelo usuarios con GET');
     Users.findById(req.params.id).exec().then(x=>res.status(200).send(x));
     
 });

// Metodo para AGREGAR un Docuemnto nuevo a la coleccion usuario
router.post('/',(req,res)=>{
    Users.create(req.body).then(x=>res.status(201).send(x));
 });


 // Metodo para ACTUALIZAR un Docuemnto identificado por id de la coleccion usuario
router.put('/:id', (req,res)=>{
    Users.findByIdAndUpdate(req.params.id, req.body).then(()=>res.sendStatus(204));
});

 // Metodo para BORRAR un Docuemnto identificado por id de la coleccion usuario
router.delete('/:id',(req,res)=>{
    Users.findByIdAndDelete(req.params.id).exec().then(()=>res.sendStatus(204));
   
});

module.exports=router;