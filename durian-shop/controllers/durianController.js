const Durian = require('../models/Durian');

// 1. Lấy tất cả các loại sầu riêng
exports.getAllDurians = async (req, res) => {
    try {
        const durians = await Durian.find();
        res.status(200).json(durians);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 2. Thêm một loại sầu riêng mới (Admin dùng)
exports.createDurian = async (req, res) => {
    try {
        const newDurian = new Durian(req.body);
        const savedDurian = await newDurian.save();
        res.status(201).json(savedDurian);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};