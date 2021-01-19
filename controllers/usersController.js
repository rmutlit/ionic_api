const users = require("../models/users")

exports.index = async (req, res, next) => {
    let data = await users.find();
    res.status(200).json(data);
};
exports.search = async (req, res, next) => {
   
    res.status(200).json({
        message: "ค้นหาข้อมูลผู้ใช้"
    });
};