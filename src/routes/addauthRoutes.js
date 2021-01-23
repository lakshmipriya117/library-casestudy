const express = require("express");
const addauthRouter = express.Router();
const Authordata = require('../model/authorData');
function router(nav){
   
    addauthRouter.get('/',function(req,res){
        res.render("authadd",{
            nav,
            title:'Library',
        });
    });
   addauthRouter.post('/add',function(req,res){
       var item={
           name:req.body.name,
           dob:req.body.dob,
           ntn:req.body.ntn,
           img:req.body.img
       }
       var author = Authordata(item);
       author.save();
       res.redirect('/authors');
   // res.send("hii");
   }) ;

    return addauthRouter;
}

module.exports = router;