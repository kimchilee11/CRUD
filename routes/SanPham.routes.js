const sanpham_controller = require('../controllers/SanPham.controller');
const express = require('express');
const router = express.Router();
var bodyParser= require('body-parser');

const path = require('path');

var urlencodedParser = bodyParser.urlencoded({ extended: false});

router.get('/create',(req,res)=>{
    let rootPath = path.resolve("views/SanPhamCreate.html");
    res.sendFile(rootPath);
});

router.post('/create', urlencodedParser, sanpham_controller.sanpham_create);

module.exports= router;
