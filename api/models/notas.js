// Creacion del modelo 
const mongoose = require('mongoose');
const plantilla= mongoose.Schema;

// Ci: Cognitivas
//esi: Estéticas
// eti: Éticas
const Notas  = mongoose.model('Notas', new plantilla({
  //  user_id:{type:plantilla.Types.ObjectId,ref:'Usuarios'},
    user_id: String,
    c1: Number, 
    c2: Number,
    c3: Number,
    c4: Number,
    c5: Number,
    es1: Number,
    es2: Number,
    es3: Number,
    et1: Number,
    et2: Number,
    et3: Number,
    et4: Number,
    et5: Number,
}));

module.exports= Notas;
