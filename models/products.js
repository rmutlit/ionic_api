const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        p_id: String, // รหัสสินค้า
        p_name: String ,// ชื่อสินค้า
        p_price_sell: Number, // ราคาขายสินค้า
        p_price_cost: Number, // ราคาทุน

    },
    {
        timestamps: true,
        collection: "products"

    }
)

module.exports = mongoose.model("products",schema)

