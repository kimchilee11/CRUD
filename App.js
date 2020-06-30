var http = require('http');
var express = require('express');
var bodyParser= require('body-parser');
var mongoose = require('mongoose');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var server = http.createServer(app);
server.listen(3000);


let dev_db_url= 'mongodb+srv://kimchi:123@cluster0-kgyyw.mongodb.net/TEST?retryWrites=true&w=majority'
mongoose.connect(dev_db_url,
  { useUnifiedTopology: true, useNewUrlParser: true  },
  err => {
    if(err)
    {
      console.log('Cannot connect to mongodb, because '+ err);
    }else
    {
        console.log('Connect to mongodb successful');
    
    }
  }
);


mongoose.Promise = global.Promise;
const db= mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB connection error:'));

var sanpham = require('./routes/SanPham.routes');
app.use('/sanpham',sanpham);