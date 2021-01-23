const express = require("express");
const addRouter = express.Router();
const Bookdata = require('../model/bookData');
function router(nav){
   
    addRouter.get('/',function(req,res){
        res.render("bookadd",{
            nav,
            title:'Library',
        });
    });
   addRouter.post('/add',function(req,res){
       var item={
           name:req.body.name,
           author:req.body.author,
           genre:req.body.genre,
           img:req.body.img
       }
       var book = Bookdata(item);
       book.save();
       res.redirect('/books');
   // res.send("hii");
   }) ;

    return addRouter;
}

module.exports = router;