const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
//import mongoose
const mongoose = require("mongoose");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const quotesRouter = require('./routes/quotes');

const app = express();

//connection to remote mongo server
mongoose.connect('mongodb+srv://py11796pooja:8209792612@1234@cluster0.uckfe.mongodb.net/quotesdatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
},function(err){
    if(err){
        console.log("some error in mongodb connection occured",err);
    }else{
        console.log("connection to database successfully");
    }
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/quote', quotesRouter);
module.exports = app;
