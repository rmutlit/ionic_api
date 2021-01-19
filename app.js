const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const customersRouter = require('./routes/customers');

const app = express();

const cors = require("cors");

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect('mongodb+srv://ionicapp:123456789fah@cluster0.zg7gs.mongodb.net/ionicapp',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
app.use("/", indexRouter);
app.use("/users", usersRouter); //localhost:3000/users
app.use("/products", productsRouter); //localhost:3000/products
app.use("/customers", customersRouter); //localhost:3000/customers

module.exports = app;
