const express = require('express');
const path = require('path');

const app = express();

// Set static files
app.use(express.static(path.join(__dirname, 'public')));

// Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());


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

