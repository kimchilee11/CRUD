var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var SanPhamSchema = new Schema({
    TenSP: { type:String, required: true, max:100 } , // String is shorthand for {type: String}
    Hinh: { type:String, required: false } ,
    Gia:   Number,
    LoaiID: Schema.Types.ObjectId
  });

  module.exports= mongoose.model('SanPham', SanPhamSchema);
