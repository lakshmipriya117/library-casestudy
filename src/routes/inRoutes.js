const express = require("express");
const inRouter = express.Router();
const bodyParser = require('body-parser');
const {check,validationResult} = require('express-validator');
const urlencodedParser = bodyParser.urlencoded({extended:false});
const Userdata = require("../model/userData");
function router(nav1){
   
    inRouter.get('/',function(req,res){
        res.render("index",{
            nav1,
            title:'Library',
        });
    });
    inRouter.post('/in',function(req,res){
        var mail = req.body.email;
        var password = req.body.password;
        Userdata.findOne({email:mail})
        .then(function(user){
            if(!user){
                res.status(404).json({error:"User Not Found!"});
                return;
            }
            if(mail==user.email&&password==user.pwd){
                res.redirect('/main');
            }
            
        })
      
        
        
       
        //res.send("hii");
    });  
   
    

    return inRouter;
}

module.exports = router;