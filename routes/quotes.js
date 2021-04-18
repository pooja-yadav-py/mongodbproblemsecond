const express = require("express");
const router = express.Router();

//import quotes schema
const quotesSchema = require("../models/quotes");

router.post('/add',function(req,res){
    console.log(req.body);
    //pass the data to studentModel(schema)
    let quote =  new quotesSchema(req.body);
    quote.save(function(err,result){
    if(err){
        console.log("no any quote");
    }else{
        console.log(result);
        res.send({result:"success"});
    }
});
});

router.get('/getAll',function(req,res){
    quotesSchema.find({},{ _id: 0 , __v: 0}, function(err,data){
        if(err){
            console.log("error ocurred",err);
        }else{
            console.log("data from quotes collection",data);
            res.send(data);
        }
    });
});

module.exports = router;