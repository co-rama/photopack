const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

// Set static files
app.use(express.static(path.join(__dirname, 'public')));
// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// DatabaseConnection
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, (err) =>{
    if(err){
        console.error(err);
    }else{
        console.log('Connected to the database server')
    }
})


/**
 * Routes
 */
// Index Routes
const indexPage = require('./routes/index');
app.use('/', indexPage);

// Register Routes
const registerPage = require('./routes/register');
app.use('/', registerPage);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server started on port: " + PORT));