
var express = require('express');
var app = express();
var db = require('./app/dbConfig/db');
var path = require('path');


var OrdersController = require('./app/controllers/ordersController');
app.use('/', OrdersController);
app.use(express.static(path.join(__dirname, 'public')));
module.exports = app;