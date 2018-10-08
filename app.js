const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product'); // Imports routes for the products
const app = express();
const mongoose = require('mongoose');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/products', product);

let port = 8000;
let dev_db_url = 'mongodb://_ijp009:12CEUOS065@ds125293.mlab.com:25293/productsdemo';
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, options = {useNewUrlParser: true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));