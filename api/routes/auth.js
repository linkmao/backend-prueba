/* Esta es la implementaciónprofesional de backend pues permite el registro de usuario con la 
debida encriptación de la contraseña, al igual que la adecuada implementacion del login*/

const express = require ('express');
const router = express.Router();
const Users = require('../models/users');
const crypto=require('crypto');
const jwt = require ('jsonwebtoken');
const singToken =(id)=>{
    return jwt.sign({id},'mi-secreto',{expiresIn:60*60*24*365});
} 

router.post('/register',(req,res)=>{
    /* En este caso como el modelo tiene ademas del username y el pass mas info, y como username
    y pass se debe validar se requiere entonces casi que llevar cada dato del req a una variable y poder
    tratar esos datos de manera independiente
    */

    // Modelo de codigo para encriptado

    //crypto.randomByte(bits,()=>{crypto.pdkf2(pass,salt,1000,64,´sha1',()=>{metodos de guardado})})
   
    const {email,password,salt,role,firstname,lastname, age, phone, grade, matricula, desc}= req.body;
    crypto.randomBytes(16,(err,salt)=>{
        const newSalt= salt.toString('base64');  // el salt viene como buffer, lo transformo en cadena 
        // Inicio el encriptado de la contraseña crypto.pbkdf2(pass,salt,iterations,keylen, digest, callback)
        crypto.pbkdf2(password,newSalt,1000,64,'sha1',(err,key)=>{
        // encriptado final de la contraseña que nos devuelve cryptp.pdkdf2
        const passEncriptado= key.toString('base64');
        // Inicia el proceso de verificacion que el usuario no exista para crearlo
        Users.findOne({email}).exec().then(user=>{
            if (user){
                return res.send('El usuario ya está registrado');
            }
            Users.create({
                email,
                password: passEncriptado,
                salt: newSalt,
                role,
                firstname,
                lastname,
                age,
                phone,
                grade,
                matricula,
                desc
            }).then(()=>{
                res.send('Usuario creado con exito')
            })
        })
        })
    });
  
});


router.post('/login',(req,res)=>{
     const {email,password} = req.body
     Users.findOne({email}).exec().then( user=>{
         if (!user){
             return res.send("Usuario y/o contraseña no válidos")
         }
         crypto.pbkdf2(password,user.salt,1000,64,'sha1',(err,key)=>{
             const passEncrypted = key.toString('base64')
             if (user.password===passEncrypted){
                const token = singToken(user._id)
                console.log("Usuario logueado satisfactoriamente");
                return res.send({token})
                
             }
             return res.send("Usuario y/o contraseña no válidos")
         })
     })
});

module.exports=router;