const router = require('express').Router();
let index = require('../controllers/index_controller');


// Get to Index
router.get('/', index.gethome);



module.exports = router;
