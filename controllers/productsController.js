const products = require("../models/products")

exports.index = async (req, res, next) => {
  let data = await products.find();
    res.status(200).json(data);
};

exports.insert = async (req, res, next) => {
    
    const data = new products({
        p_id: "10001",
        p_name: "โทรศัพท์มือถือ",
        p_price_sell: 9900,
        p_price_cost: 8500,
    });
    data.save();

    res.status(201).json({
        message: "เพิ่มข้อมูลเรียบร้อยแล้ว",
    });
  };