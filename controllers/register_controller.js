const path = require('path');

exports.getRegister = (req, res) => {
    console.log('Successfully hittng the register page');
    res.sendFile(path.join(__dirname, '../public', 'register.html'));
}