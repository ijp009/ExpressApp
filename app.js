const express = require('express');
const bodyParser = require('body-parser');
const atm = require('./routes/atm'); 
const app = express();
const mongoose = require('mongoose');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Accept, Content-Type");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/atm', atm);

let port = 8000;
let dev_db_url = 'mongodb://_ijp009:12CEUOS065@ds121624.mlab.com:21624/atmdb';

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, options = {useNewUrlParser: true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));