const path = require('path');

exports.getRegister = (req, res) => {
    console.log('Successfully hitting the register page');
    res.render('register');
}

exports.getRegisterContents = (req, res) =>{
    console.log(req.body);
    res.redirect('/register');
}