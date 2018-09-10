const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  primerNombre: { type: String, required:true },
  apellido: { type: String, required:true},
  email: { type: String,required:true },
  contraseña: { type: String, required:true }
  //isDeleted: { type: Boolean, default:false }
});

//UserSchema.methods.generateHash= function(contraseña)
//{
   // return bycript.hashSync(contraseña,bycript.genSaltSync(8),null);
//}

//UserSchema.methods.validPassword=function(contraseña)
//{
  //  return bycript.compareSync(contraseña,this.contraseña);
//}
module.exports = mongoose.model('User', UserSchema);
