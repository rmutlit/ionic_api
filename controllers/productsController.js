const products = require("../models/products")

exports.index = async (req, res, next) => {
  let data = await products.find().sort({ _id: -1 });
    res.status(200).json(data);
};

exports.insert = async (req, res, next) => {

    const { p_id, p_name, p_price_cost, p_price_sell } = req.body;
    
    const data = new products({
        p_id,
        p_name,
        p_price_cost,
        p_price_sell
    });
    data.save();

    res.status(201).json({
        message: "เพิ่มข้อมูลเรียบร้อยแล้ว"
    });
  };