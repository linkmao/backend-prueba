// Creacion del modelo 

const mongoose = require('mongoose');
const plantilla= mongoose.Schema;

const Users = mongoose.model('Usuarios', new plantilla({
    firstname: String, 
    lastname: String,
    age: Number,
    phone: String,
    grade: String,
    matricula: Boolean,
    desc: String
}));

module.exports= Users;



