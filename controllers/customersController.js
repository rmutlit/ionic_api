const customers = require("../models/customers")

exports.index = async (req, res, next) => {
  //  let data = await products.find();
    res.status(200).json({
        message: "ข้อมูลลูกค้า"
    });
};