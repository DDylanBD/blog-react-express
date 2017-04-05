const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const app = express();
const passport = require('passport');
const config = require('./config');

require('./back-end/models').connect(config.blogDb);

app.use(express.static(path.join(__dirname, '/front-end/src/static/')));
app.use(express.static(path.join(__dirname, '/front-end/public/')));
app.use(morgan('dev'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-requested-With, content-type, Authorization');
    next();
});


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(passport.initialize());

const localSignStrategy = require('./back-end/passport/local-signup');
const localLoginStrategy = require('./back-end/passport/local-login');
passport.use('local-signup', localSignStrategy);
passport.use('local-login', localLoginStrategy);


const authCheckMiddleware = require('./back-end/middleware/auth-check');
app.use('/api', authCheckMiddleware);


const authRoutes = require('./back-end/routes/auth');
// const apiRoutes = require('./back-end/routes/api');
app.use('/auth', authRoutes);
// app.use('/api', apiRoutes);


app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/front-end/src/static/blog.html'));
})


app.listen(3000, () => {
  console.log('Server is running on localhost:3000')
});
