var express = require('express');
var router = express.Router();

// GET homepage 
router.get('/', (req, res) => {
    res.render('index.ejs');
});

module.exports = router;
