var express = require('express');
var router = express.Router();

// GET login page 
router.get('/', (req, res) => {
   res.render('login');
});

module.exports = router;
