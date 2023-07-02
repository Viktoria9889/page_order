const express = require('express');
const mainRoute = require('./routes/mainRoute');
const bodyParser = require("body-parser")



const server = express();

server.set('view engine', 'ejs');
server.set('views', __dirname + '/views');

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(__dirname + '/public'));
server.use(bodyParser.urlencoded({ extended: true }));


const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/items');


server.use('/',  mainRoute);



server.listen(4000);