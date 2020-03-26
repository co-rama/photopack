const express = require('express');
const path = require('path');

const app = express();

// Set static files

app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Server started on port: " + PORT));

