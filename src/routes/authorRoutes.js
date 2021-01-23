const express = require("express");
const authorsRouter = express.Router();
const Authordata = require("../model/authorData");
function router(nav){
    // var authors =[
    //     {
    //         name : "K.R Meera",
    //         dob : "19 February 1970",
    //         ntn : "Indian",
    //         img : "KR-MEERA.jpg"
    //     },
    //     {
    //         name : "Vaikom Muhammed Basheer",
    //         dob : "21 January 1908",
    //         ntn : "Indian",
    //        img: "basheer.jpg"
    //     },
    //     {
    //         name : "Benyamin",
    //         dob : "1971",
    //         ntn : "Indian",
    //         img: "ben.jpg"
    //     }
    // ]
    authorsRouter.get('/',function(req,res){
        
        
            Authordata.find()
            .then(function(authors){
                res.render("authors",{
                    nav,
                    title:'Library',
                    authors
                });
            })
       
    });
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render("author",{
                nav,
                title:'Library',
                author
            });
        })
       
    });
    authorsRouter.get('/:id/updt',function(req,res){
        const id = req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render("authup",{
                nav,
                title:'Library',
            author
               
            }); 
        })
        
    });
    authorsRouter.post('/:id/updt/upd',function(req,res){
        const id = req.params.id;
        var item={
            name:req.body.name,
            dob:req.body.dob,
            ntn:req.body.ntn,
            img:req.body.img
        }
        Authordata.find({_id:id})
        .then(function(author){
             author = Authordata(item);
        author.save();
        res.redirect('/authors');
        })
        
        
        
    });
    authorsRouter.get('/:id/dlt',function(req,res){
        const id = req.params.id;
        
        Authordata.findOneAndRemove({_id:id},function(err,deleteddoc){

        });
        res.redirect('/authors');
        
        
        
    });
    return authorsRouter;
}

module.exports = router;