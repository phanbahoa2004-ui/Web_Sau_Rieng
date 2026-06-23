const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Để server đọc được dữ liệu JSON gửi lên

// Kết nối MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log(' Đã kết nối MongoDB thành công!'))
    .catch(err => console.error('Lỗi kết nối DB:', err));

// Route test cơ bản
app.get('/', (req, res) => {
    res.send('Chào mừng bạn đến với Web Bán Sầu Riêng API!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server đang chạy tại port ${PORT}`));