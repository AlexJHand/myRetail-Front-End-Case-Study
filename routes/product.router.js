// Requires
const router = require('express').Router();
const bodyParser = require('body-parser');
const product = require('../products/item-data.json');

// Server-side get call
router.get('/', function(req, res) {
    console.log("In product router");
    res.sendStatus(200).send(product);
});

// Export
module.exports = router;
