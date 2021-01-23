const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/library');
mongoose.connect('mongodb+srv://user:user@ictak.mx5eh.mongodb.net/library?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    name:String,
    author:String,
    genre:String,
    img:String
});
var Bookdata = mongoose.model('bookdata',BookSchema);
module.exports = Bookdata;
