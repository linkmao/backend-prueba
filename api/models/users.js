/* Creacion del modelo Usuario */

const mongoose = require('mongoose');
const plantilla= mongoose.Schema;

const Users = mongoose.model('Usuarios', new plantilla({
    email:String,
    password:String,
    salt:String,
    role:{type: String, default:'user'},
    firstname: String, 
    lastname: String,
    age: Number,
    phone: String,
    grade: String,
    matricula: Boolean,
    desc: String
}));

module.exports= Users;



