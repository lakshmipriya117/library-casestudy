const express = require("express");
const booksRouter = express.Router();
const Bookdata = require('../model/bookData');
 function router(nav){
//     var books =[
//         {
//             title: 'Aarachar',
//             author: 'K.R Meera',
//             genre: 'Novel',
//             img: 'aarachar.jpg'
//         },
//         {
//             title: 'Pathummayude aadu',
//             author: 'Basheer',
//             genre: 'Drama',
//             img: 'pathumma.jpg'
//         },
//         {
//             title: 'Aadujeevitham',
//             author: 'Benyamin',
//             genre: 'Novel',
//             img: 'aadu.jpg'
//         }
//     ]
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",{
                nav,
                title:'Library',
                books
            });
        })
       
    });
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render("book",{
                nav,
                title:'Library',
                book
            });
        })
       
    });
    booksRouter.get('/:id/update',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render("update",{
                nav,
                title:'Library',
                book
               
            }); 
        })
        
    });
    booksRouter.post('/:id/update/edit',function(req,res){
        const id = req.params.id;
        var item={
            name:req.body.name,
            author:req.body.author,
            genre:req.body.genre,
            img:req.body.img
        }
        Bookdata.find({_id:id})
        .then(function(book){
             book = Bookdata(item);
        book.save();
        res.redirect('/books');
        })
        
        
        
    });
    booksRouter.get('/:id/delete',function(req,res){
        const id = req.params.id;
        
        Bookdata.findOneAndRemove({_id:id},function(err,deleteddoc){

        });
        res.redirect('/books');
        
        
        
    });
   
    return booksRouter;
}

module.exports = router;