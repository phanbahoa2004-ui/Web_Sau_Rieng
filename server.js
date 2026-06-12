const express = require('express');
const app = express();
const PORT = 3000;

// Đường dẫn trang chủ (http://localhost:3000/)
app.get('/', (req, res) => {
    res.send('<h1>Chào mừng bạn đến với Cửa Hàng Sầu Riêng Online!</h1><p>Sầu riêng Ri6, Monthong bao ăn, 1 đổi 1 nếu sượng.</p>');
});

// Chạy server tại cổng 3000
app.listen(PORT, () => {
    console.log(`Website sầu riêng đang chạy tại: http://localhost:${PORT}`);
});