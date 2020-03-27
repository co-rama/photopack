const router = require('express').Router();
let registerPage = require('../controllers/register_controller');


// Get to Register
router.get('/register', registerPage.getRegister);

// Post Register
router.post('/', registerPage.getRegisterContents);


module.exports = router;
