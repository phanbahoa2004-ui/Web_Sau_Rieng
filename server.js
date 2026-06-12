const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Cấu hình để Express phục vụ các file tĩnh (HTML, CSS, Ảnh) trong thư mục 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Giả lập dữ liệu Sầu Riêng từ Database (Mock Data)
const danhSachSauRieng = [
    {
        id: 1,
        ten: "Sầu Riêng Ri6 Nguyên Quả",
        loai: "Ri6",
        gia: 120000, // Giá mỗi kg
        donVi: "kg",
        hinhThuc: "Nguyên quả",
        moTa: "Cơm vàng, hạt lép, vị ngọt béo vừa phải. Bao ăn 1 đổi 1."
    },
    {
        id: 2,
        ten: "Sầu Riêng Monthong (Dona) Bóc Múi",
        loai: "Monthong",
        gia: 350000,
        donVi: "khay 500g",
        hinhThuc: "Bóc múi hút chân không",
        moTa: "Vị ngọt đậm, cơm rất dày và ráo tay, ship hỏa tốc."
    }
];

// Tạo một đường link API để lấy danh sách sầu riêng (cho Frontend gọi)
app.get('/api/products', (req, res) => {
    res.json(danhSachSauRieng);
});

// Chạy server
app.listen(PORT, () => {
    console.log(`Website sầu riêng đang chạy tại: http://localhost:${PORT}`);
});