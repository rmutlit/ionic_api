const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        c_id: String, // รหัสสินค้า
        c_firstname: String ,// ชื่อสินค้า
        c_lastname: String, // ราคาขายสินค้า
        c_address: String, // ราคาทุน
        c_tel: String

    },
    {
        timestamps: true,
        collection: "customers"

    }
)

module.exports = mongoose.model("customers",schema)
