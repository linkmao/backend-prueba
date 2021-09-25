/* este es un middleware lo que hace es validar que efectivamente el usuario si tenga token,en caso de
tenerlo, le permite el acceso a las rutas asignadas*/
const jwt = require ('jsonwebtoken');
const Users = require('../models/users');


module.exports =(req,res,next) =>{
    const token = req.headers.authorization
    if (!token){
        return res.status(403).send("Usuario sin token")
    }
    jwt.verify(token, 'mi-secreto',(err,decoded)=>{
        const {id}= decoded
        req.id=id;
        console.log("Usuario logueado");
        next();
        
         // Esta linea inferior es la implementacion del profe pero me gusta mas mi implementacion pues la busqueda por 
         // id se hace no aca en el midleware sino directamente en las rutas
         //  Users.findById(id).exec().then(user=>{req.user=user; next()})
    })
}