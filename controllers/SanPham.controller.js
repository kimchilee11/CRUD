const SanPham = require('../models/SanPham.models');
//CRUD

exports.sanpham_create = function(req, res){
    let sanpham = new SanPham(
        {
        TenSP: req.body.txtTenSP,
        Hinh: req.body.txtHinh,
        Gia: req.body.txtGia,
        LoaiID: req.body.txtLoaiID
        }
    );
    
    sanpham.save(function (err) {
        if(err)
        return next(err);
        else
        req.send('San Pham Created successfully');
    })

};
