var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var path = require('path');


var Order = require('../models/order');



/*****  GET ALL orders from database *****/
router.get('/orders', function (req, res) {

    Order.find({}, function (err, orders) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        
        res.status(200).send(orders);
    });

});

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '../../index.html'));
});


/***** GET order by id *****/


/***** POST order *****/


/***** DELETE order by id *****/

module.exports = router;