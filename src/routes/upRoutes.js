const express = require("express");
const upRouter = express.Router();
const Userdata = require('../model/userData');
function router(nav1){
   
    upRouter.get('/',function(req,res){
        res.render("signup",{
            nav1,
            title:'Library',
        });
    });
    upRouter.post('/up',function(req,res){
      var item = {
          lname:req.body.lname,
          fname:req.body.fname,
          email:req.body.email,
          pwd:req.body.pwd,
          cpwd:req.body.cpwd,
          phone:req.body.phone
      }
      var user = Userdata(item);
      if(item.pwd==item.cpwd){
        user.save();
      res.redirect('/index');
      }
      else{
        res.status(500).json({error:"Passwords dont match"});
        return;
        //alert("passwords dont match");
      }
      
    
    }) ;
 
    
 
 
 
    

    return upRouter;
}

module.exports = router;