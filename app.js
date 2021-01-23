const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const {check,validationResult} = require("express-validator");
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/library');
mongoose.connect('mongodb+srv://user:user@ictak.mx5eh.mongodb.net/library?retryWrites=true&w=majority');
const nav = [
{
     link:'/main',name:'Home'
},
{
    link:'/books', name:'Books'
},
{
    link:'/authors',name:'Author'
},
{
    link:'/bookadd',name:'Add Book'
},
{
    link:'/authadd',name:'Add Author'
}
];
const nav1 = [{
    link:'/index',name:'Login'
},
{
    link:'/signup',name:'SignUp'
}];
const booksRouter = require("./src/routes/booksRoutes")(nav);
const authorsRouter = require("./src/routes/authorRoutes")(nav);
const inRouter = require("./src/routes/inRoutes")(nav1);
const indexRouter = require("./src/routes/indexRoutes")(nav);
const upRouter = require("./src/routes/upRoutes")(nav1);
const addRouter = require("./src/routes/addRoutes")(nav);
const addauthRouter = require("./src/routes/addauthRoutes")(nav);
//const updateRouter = require("./src/routes/updateRoutes")(nav);
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set("view engine","ejs");
app.set("views","./src/views");
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/index',inRouter);
app.use('/main',indexRouter);
app.use('/signup',upRouter);
app.use('/bookadd',addRouter);
app.use('/authadd',addauthRouter);
//app.use('/:id/update',updateRouter);
app.get('/',function(req,res){
    res.render("index",{
        nav1,
        title:'Library'
    });
});


app.listen(5000);