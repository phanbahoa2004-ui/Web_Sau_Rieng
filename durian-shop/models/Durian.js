const mongoose = require('mongoose');

const durianSchema = new mongoose.Schema({
    name: { type: String, required: true },         // Tên (Ví dụ: Sầu riêng Ri6, Sầu chuồng bò)
    type: { type: String, required: true },         // Loại (Ri6, Thái, Musang King)
    price: { type: Number, required: true },        // Giá tiền/kg
    weight: { type: Number, required: true },       // Khối lượng trung bình mỗi quả
    stock: { type: Number, default: 0 },            // Số lượng còn trong kho
    description: { type: String },                  // Mô tả độ béo, độ ngọt
    image: { type: String },                        // Đường dẫn ảnh sản phẩm
}, { timestamps: true }); // Tự động thêm ngày tạo, ngày sửa

module.exports = mongoose.model('Durian', durianSchema);