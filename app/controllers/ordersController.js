var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


var Order = require('../models/order');



/*****  GET ALL orders from database *****/
router.get('/', function (req, res) {

    Order.find({}, function (err, orders) {
        if (err) return res.status(500).send("There was a problem finding orders.");
        res.status(200).send(orders);
    });

});

/***** GET order by id *****/


/***** POST order *****/


/***** DELETE order by id *****/

module.exports = router;
