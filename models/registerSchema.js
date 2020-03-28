const mongoose = require('mongoose');

const users = mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true
    },
    agreeTerms : {
        type: Boolean,
        default:false
    },
    date : {
        type: Date,
        default: Date.now()
    }, 
});

module.exports = mongoose.model('registeredUsers', users);