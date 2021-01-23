const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
     
     email:String,
     password:String
});
var Userdata = mongoose.model('userdata',UserSchema);
module.exports = Userdata;