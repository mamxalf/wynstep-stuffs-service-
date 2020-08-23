require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const stuffsRouter = require('./routes/stuff');
const sizesRouter = require('./routes/size');
const discountRouter = require('./routes/discount');
const labelRouter = require('./routes/label');
const photoRouter = require('./routes/photo');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/stuffs', stuffsRouter);
app.use('/sizes', sizesRouter);
app.use('/discounts', discountRouter);
app.use('/labels', labelRouter);
app.use('/photos', photoRouter);

module.exports = app;
