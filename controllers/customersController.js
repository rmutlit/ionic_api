const customers = require("../models/customers")

exports.index = async (req, res, next) => {
  let data = await customers.find().sort({ _id: -1 });
    res.status(200).json(data);
};

exports.insert = async (req, res, next) => {

  const { c_id, c_name, c_lastname, c_email, c_tel } = req.body;

  const data = new customers({
    c_id,
    c_name,
    c_lastname,
    c_email,
    c_tel
  });
  data.save();

  res.status(201).json({
    message: "เพิ่มข้อมูลเรียบร้อยแล้ว"
  });
};