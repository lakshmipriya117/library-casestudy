const express = require("express");
const indexRouter = express.Router();
function router(nav){
   
    indexRouter.get('/',function(req,res){
        res.render("main",{
            nav,
            title:'Library',
        });
    });
    indexRouter.post('/',function(req,res){
        res.render("main",{
            nav,
            title:'Library',
        });
    });

    return indexRouter;
}

module.exports = router;