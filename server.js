const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const config = require('./config.js');


const app = express();

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-requested-With, content-type, Authorization');
	next();
});

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/client/src/static/')));
app.use(express.static(path.join(__dirname, '/client/public/')));

app.use('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/src/static/blog.html'));
})
app.listen(config.port, () => {
});
