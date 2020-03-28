const path = require('path');
const User = require('../models/registerSchema');

exports.getRegister = (req, res) => {
    console.log('Successfully hitting the register page');
    res.render('register');
}

exports.postRegister = (req, res) =>{

    if(req.body.agreeTerms === 'on'){
        req.body.agreeTerms = true;
    }else{
        req.body.agreeTerms = false;
    }
    const user = new User({
        username : req.body.username,
        email : req.body.email,
        agreeTerms : req.body.agreeTerms,
    });

    var savedUser = user.save()
    .then(data => {
        console.log(data);
        res.redirect('/register');
    });
}
