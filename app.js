
var express = require('express');
var app = express();
var db = require('./app/dbConfig/db');

var OrdersController = require('./app/controllers/ordersController');
app.use('/orders', OrdersController);

module.exports = app;