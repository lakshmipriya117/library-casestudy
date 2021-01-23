const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
     fname:String,
     lname:String,
     email:String,
     pwd:String,
     cpwd:String,
     phone:Number
});
var Userdata = mongoose.model('userdata',UserSchema);
module.exports = Userdata;