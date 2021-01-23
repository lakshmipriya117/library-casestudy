const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AuthorSchema = new Schema({
      name:String,
      dob:String,
      ntn:String,
      img:String

});
var Authordata = mongoose.model('authordata',AuthorSchema);
module.exports = Authordata;